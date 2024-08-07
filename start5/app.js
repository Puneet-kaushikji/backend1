const express = require('express');
const cookieParser = require("cookie-parser")
const app = express();
const bcrypt = require('bcrypt')
app.use(cookieParser());

app.get("/",function(req,res){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("puneet", salt, function(err, hash) {
            console.log(hash);
            // Store hash in your password DB.
        });
    });
    res.send("read page");
    
})

app.get("/result",function(req,res){
    bcrypt.compare("puneet", "$2b$10$iQIhU6LXxLtF6fcsv3VL..XZFgpyB6Sh4zGIiellbU1BzubbXqht6").then(function(result) {
        // result == true
        console.log(result)
    });
})


app.get("/read",function(req,res){
     console.log(req.cookies);
     res.send("read page");
})



app.listen(3000);