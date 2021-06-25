# LINK DEPLOY
Client: https://neusistem-kyc.web.app/
Server: https://sistem-kyc.herokuapp.com

### Akun User
- **Email: galang@mail.com**
- **Password: galang123**

### Akun Admin
- **Email: admin@mail.com**
- **Password: admin123**

### Link SLDC Admin
- **Mockup Figma: https://www.figma.com/file/OLZ1CrRrDsKoaZsK5twVgC/Prototype-KYC-aviana?node-id=0%3A1**
- **Database Schma: https://docs.google.com/document/d/19uMtGYjWk-8JHnatjuTWb5x3HxlPsYGSQh5W1eqLotE/edit?usp=sharing**


---
# API DOC sistem-kyc 

# Auth
### POST /register
**_Request Header_**
```sh
No Needed
```
**_Request Body_**
```sh
{
      "email": "test@mail.com",
      "first_name": "John",
      "last_name": "sena",
      "password": "qweqwe123"
}
```
#### Response
**_Success_**
```sh
{
    "message": "Account created"
}
```
**_Error_**
**(400) - Bad Request**
```sh
[
    {"message": "First name cannot be empty"},
    {"message": "Email format is incorrect"},
    {"message": "First name cannot be empty"},
    {"message": "Last name cannot be empty" },
    {"message": "The password must be at least 8 characters long"}
]
```
---
### POST /login
**_Request Header_**
```sh
No Needed
```
**_Request Body_**
```sh
{
      "email": "galang@mail.com",
      "password": "galang123",
      "isAdmin": true
}
```
#### Response
**_Success_**
```sh
{
    "access_token": {token},
    "isAdmin": false
}
```
**_Error_**
**(401) - Bad Request**
```sh
{
    "message": "Invalid Email or Password"
}
```
---
# Admin routes
### GET /users (Get All users data)
**_Request Header_**
```sh
{
    access_token: {token}
}
```
**_Request Body_**
```sh
No Needed
```
#### Response
**_Success_**
```sh
[
    {
        "id": 1,
        "email": "galang@mail.com",
        "first_name": "Galang",
        "last_name": "Ardian",
        "password": "$2a$10$t.mqgacJlP4egtyJVGasLO8l6BS0r/Aomvqk6Jp4zKYg5I33rTk52",
        "createdAt": "2021-06-24T12:16:22.975Z",
        "updatedAt": "2021-06-24T12:16:22.975Z",
        "UserDetail": null
    },
    {
        "id": 2,
        "email": "rafly@mail.com",
        "first_name": "Rafly",
        "last_name": "Ardian",
        "password": "$2a$10$CLO2vVcOfLD2CWalTd.YRezHD8ehz0b8fiOYTyM1x57vVkNy..m76",
        "createdAt": "2021-06-24T12:16:23.077Z",
        "updatedAt": "2021-06-24T12:16:23.077Z",
        "UserDetail": {Object}
    }
]
```
**_Error_**
**(401) - Bad Request**
```sh
{
    "name": "customError",
    "status": 401,
    "message": "Unauthorized"
}
```
---
### GET /user/:id (Get user data)
**_Request Header_**
```sh
{
    access_token: {token}
}
```
**_Request Body_**
```sh
No Needed
```
#### Response
**_Success_**
```sh
{
    "id": 1,
    "email": "galang@mail.com",
    "first_name": "Galang",
    "last_name": "Ardian",
    "password": "$2a$10$t.mqgacJlP4egtyJVGasLO8l6BS0r/Aomvqk6Jp4zKYg5I33rTk52",
    "createdAt": "2021-06-24T12:16:22.975Z",
    "updatedAt": "2021-06-24T12:16:22.975Z",
    "UserDetail": null
}
```
**_Error_**
**(404) - Bad Request**
```sh
{
    "message": "User not found"
}
```
---

### PUT /user/:id (Validating user account)
**_Request Header_**
```sh
{
    access_token: {token}
}
```
**_Request Body_**
```sh
No Needed
```
#### Response
**_Success_**
```sh
{
    "message": "Update Success"
}
```
**_Error_**
**(500) - Bad Request**
```sh
{
    "message": "The user has not filled out the verification form"
}
```
---


### GET /userIdCard/:imageUrl
**_Request Header_**
```sh
{
    access_token: {token}
}
```
**_Request Body_**
```sh
No Needed
```
#### Response
**_Success_**
```sh
{ Returning an IMAGE }
```
**_Error_**
**(500) - Bad Request**
```sh
{
    "message": "Not Found"
}
```
---
### GET /userPhotos/:imageUrl
**_Request Header_**
```sh
{
    access_token: {token}
}
```
**_Request Body_**
```sh
No Needed
```
#### Response
**_Success_**
```sh
{ Returning an IMAGE }
```
**_Error_**
**(500) - Bad Request**
```sh
{
    "message": "Not Found"
}
```
---

# User routes
### GET /user (Get User Data)
**_Request Header_**
```sh
{
    access_token: {token}
}
```
**_Request Body_**
```sh
No Needed
```
#### Response
**_Success_**
```sh
{
    "user": {
        "email": "galang@mail.com",
        "first_name": "Galang",
        "last_name": "Ardian",
        "UserDetail": null
    }
}
```
**_Error_**
**(500) - Internal Server Error**
```sh
{
  message: "Internal Server Error";
}
```
---
### POST /kyc-validation
**_Request Header_**
```sh
{
    access_token: {token}
}
```
**_Request Body_**
```sh
{
  id_type: 'ID Card',
  id_number: '12312317',
  nationality: 'Indonesia',
  address: 'Jalan Gontoran No 46 Bertais',
  parent_firstName: 'Galang',
  parent_lastName: 'Ardian',
  gender: 'Male',
  marital_status: 'Single',
  date_birth: '2021-06-25',
  city: 'Kota Mataram',
  province: 'Prov. Nusa Tenggara Barat',
  phone_number: '0877858549480',
  zip_code: '83236',
}
```
#### Response
**_Success_**
```sh
{
    message: "Success verify your account"
}
```
**_Error_**
**(400) - Internal Server Error**
```sh
[
    { "message": "ID type cannot be empty" },
    { "message": "ID number cannot be empty" },
    { "message": "Nationality cannot be empty" },
    { "message": "Address cannot be empty" }
]
```
**(500) - Internal Server Error**
```sh
{
  message: "Internal Server Error";
}
```
---
