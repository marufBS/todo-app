const express = require('express')
const { saveUser, getHome, getUsers, updateUsers } = require('../Controllers/users.controller')
const userRouter = express.Router()



userRouter.get('/',getHome)
userRouter.get('/users/',getUsers)
userRouter.put('/users/:id',updateUsers)
userRouter.post('/users',saveUser)



module.exports = userRouter