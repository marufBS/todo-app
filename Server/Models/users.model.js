const mongoose = require("mongoose")

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://0909maruf:ar7c0DaJlmpJT5KB@todocluster.nzqay3x.mongodb.net/employee")
        console.log(`To-do DB connected`)
    } catch (error) {
        console.log(`To-do DB not connected`)
        console.log(error.message)
    }
}

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'write your name please'],
        trim:true,
        minString:[5,'too short name'],
        maxString:[20,'too long name']
    },
    userName:{
        type:String,
        required:[true,'you have missed your user name'],
        trim:true,
        minString:[8,'too short user name'],
        maxString:[15,'too long user name']
    },
    email:{
        type:String,
        required:[true,'email need to be given'],
        trim:true,
    },
    phone:{
        type:Number,
        required:[true,'I really need your number'],
        trim:true,
    },
    age:{
        type:Number,
        required:[true,'I really need your age'],
        max:[50,'You are too old'],
        min:[18,'You are too young']
    }
})

const User = mongoose.model('user', userSchema);

module.exports = {ConnectDB,User}