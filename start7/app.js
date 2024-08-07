const express = require("express");
const app = express(); 

const userModel = require("./models/user");
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", async (req, res) => {
    try {
        let { username, email, password, age } = req.body;

        bcrypt.genSalt()
        let createdUser = await userModel.create({
            username,
            email,
            password,
            age 
        });
        res.send(createdUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
