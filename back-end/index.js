import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose"
import contact from "./models/contact.js";
import dotenv from "dotenv"
import Cors from "cors"
dotenv.config();


const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(Cors())




mongoose.connect(process.env.MONGODB).then(()=>console.log("connected to db"))

app.post("/add",(req,res)=>{
 const {name,number}=req.body;
 res.status(200).json({data:"recived"})
 const newcontact=new contact({name,number});
 newcontact.save().then(()=>console.log("data saved"))
})



app.get("/getData",async (req,res)=>{
  const contacts= await contact.find({})
 res.status(200).json(contacts)
  
  
})


app.listen(3000,()=>console.log("connected to port 3000"))