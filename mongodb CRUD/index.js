const mongoose  = require("mongoose");
const express = require("express");
const Post = require("../models/postModels")

const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
     res.send("Home");
})

app.get("/getposts", async (req, res) =>{
     try {
         const data = await Post.find({});
         res.status(200).json(data);
        
     } catch (error) {
        console.log(error.message);
        res.status(400).json({message: error.message})

     }
})

// update the post 
app.put("/post/:id", async (req, res) =>{
    const {id} = req.params;

    try{
        const update = await Post.findByIdAndUpdate(id, req.body, {returnOriginal: false});

        if(!update){
            return res.status(400).json({message: `with this id ${id} post doesn't exists`});

        }

        res.status(200).json(update);
   
    }catch(error) {
        console.log(error.message);
        res.status(400).json({message: error.message})
    }

})

app.delete("/postdelete/:id", async (req, res) =>{
    // console.log(req.body);
    // res.send(req.body)
    try {
    const {id} = req.params;

        const deleteOne = await Post.findByIdAndDelete(id);
        if(!deleteOne){
            return res.status(404).json({message: "Not Found"})
        }

        res.status(200).json(deleteOne);
        
    } catch (err) {
        console.log(err.message);
        res.status(500).json({message: err.message})

        
    }
})


app.post("/post", async (req, res) =>{
    // console.log(req.body);
    // res.send(req.body)
    try {
        const postUser = await Post.create(req.body);
        res.status(200).json(postUser);
        
    } catch (err) {
        console.log(err.message);
        res.status(500).json({message: err.message})

        
    }
})


const PORT = 8080;
mongoose.connect("mongodb+srv://Posts:0BzSUyCTqzW7p0QR@cluster0.hs9z0p4.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    console.log("Connected");
    app.listen(PORT, ()=>{
        console.log(`Listening on ${PORT}`)
   })

}).catch((err) =>{
    console.log(err);
})


