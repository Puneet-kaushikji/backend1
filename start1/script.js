const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("middleware chala");
    next();
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get("/profile",function(req,res) {
    res.send("puneet is now here")
})

app.listen(3000)