const express = require('express');
const app = express();
const userModel = require('./userModel');

app.get("/",(req,res)=>{
    res.send("hey");
})

app.get("/create", async (req,res) =>{
    let createduser = await userModel.create({
        name:"kaushik",
        email:"punkaush@gmail.com",
        username:"kkttt"
    })
    res.send(createduser);
})

app.get("/update", async (req,res)=>{
    let updateduser = await userModel.findOneAndUpdate({username:"puneettt"},{name:"puneet kaushik"},{new:true})
    res.send(updateduser)
})
 
app.get("/read", async(req,res)=>{
    let users = await userModel.find();
    res.send(users)
})

app.get("/delete", async (req,res)=>{
    let users = await userModel.findOneAndDelete({username:"puneettt"});
    res.send(users);
})



app.listen(3000);