let env = process.env.NODE_ENV

if(env === "development" || env === "test") require("dotenv").config()


const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const router = require('./routers')
const cors = require("cors")
const errorHandler = require("./middlewares/errorHandler")
const fileUpload = require('express-fileupload');


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())

app.use(router)
app.use(errorHandler)

app.use("/", (req, res) => {
  res.send("Error")
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
}) 
