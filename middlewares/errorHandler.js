module.exports = (err, req, res, next) => {
  let errors = null
  console.log(err.errors)
  switch(err.name) {
    case 'CustomError':
      res.status(err.code).json(err)
      break
    case "Auth Failed":
      res.status(401).json({
        message: err.message
      });
      break
    case 'SequelizeUniqueConstraintError':
      errors = err.errors.map(e => {
        return {
            message: e.message
        }
      })
      res.status(400).json(errors)
      break
    case 'SequelizeValidationError':
      errors = err.errors.map(e => {
        return {
            message: e.message
        }
      })
      res.status(400).json(errors)
      break
    case 'JsonWebTokenError':
      res.status(401).json({
        message: err.message
      });
      break
    default:
      res.status(500).json(err)
  }
}