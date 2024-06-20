const express = require('express')
const { saveUser, getHome } = require('../Controllers/users.controller')
const userRouter = express.Router()



userRouter.get('/',getHome)
userRouter.post('/users',saveUser)



module.exports = userRouter