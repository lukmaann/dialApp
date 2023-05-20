import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose"
import contact from "./models/contact.js";
import dotenv from "dotenv"
dotenv.config();


const app=express();
app.use(bodyParser.urlencoded({extended:true}))




mongoose.connect(process.env.MONGODB).then(()=>console.log("connected to db"))

app.post("/add",(req,res)=>{
  const {name,number}=req.body
 
  const newcontact= new contact({
    name:name,
    phno:number
   })
   newcontact.save().then(()=>res.status(200))


})

app.get("/",(req,res)=>res.send("hello"))


app.listen(3000,()=>console.log("connected to port 3000"))