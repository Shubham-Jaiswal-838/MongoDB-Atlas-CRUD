const express = require("express");
const mongoose = require("mongoose");
const dbConnection = require("../backend/dbConnection");

const app = express();

app.use(express.json()); // middleware to convert incoming req into json object 
 
app.get("/", (req, res) =>{
      res.send("Hello world");
})

app.post("/post", (req, res) =>{
    res.send("Post");
})


const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})