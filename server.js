const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());
const alignClient = mongodb.MongoClient;
app.get("/products",(req,res)=>{
    alignClient.connect("mongodb+srv://align:align@align.zkcfw.mongodb.net/fullstack?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("fullstack");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.json(array);
                }
            })
        }
    })
});
app.get("/demo",(req,res)=>{
    res.json({"message":"Welcome to CI CD Process"});
})
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});
