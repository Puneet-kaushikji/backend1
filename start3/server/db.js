// import mongoose from "mongoose";
  const mongoose = require("mongoose");
  const app = mongoose();


    const cnttom= async ()  => { await mongoose.connect("mongodb://localhost:27017",function(){
        console.log("puneet is here");
    })}