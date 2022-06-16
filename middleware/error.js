const logger = require('../logger/logger')

const error = (ex, req, res, next)  =>{
  console.log('error cought', ex)
  console.log('err.stack', ex.stack)
  console.log('err.code',ex.code)
  logger.error(ex.message);
return res.status(500).json({error:ex.message})
}

module.exports = error