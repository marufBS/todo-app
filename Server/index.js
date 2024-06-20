const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const userRouter = require('./Routes/users.route')
const {ConnectDB} = require('./Models/users.model')
const app = express();

//Port//
const PORT = 3000;

//middlewares//
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(userRouter)



app.listen(PORT,async()=>{
    console.log(`Todo app server is running at http://localhost:${PORT}`)
    await ConnectDB()
})