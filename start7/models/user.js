 const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/puneet')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });


 const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number
 });

 module.exports = mongoose.model("user",userSchema);