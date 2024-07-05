const { User } = require('../Models/users.model')

exports.getHome = (req,res)=>{
    res.send("Todo app is running")
};

exports.saveUser = async (req, res) => {
    try {
        const { name, userName, email, phone, age } = req.body
        const newUser = new User({
            name: name,
            userName: userName,
            email: email,
            phone: phone,
            age: age
        });
        const savedUser = await newUser.save()
        res.status(200).send(savedUser);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

exports.getUsers =async (req,res)=>{
    try {
        const allUser = await User.find()
        res.status(200).send(allUser)
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}

exports.updateUsers = async (req,res)=>{
    try {
        const name = req.body.name;
        const id = req.params.id;
        const updateUser = await User.findOneAndUpdate({_id:id},{name})
        res.status(200).send(updateUser)
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}