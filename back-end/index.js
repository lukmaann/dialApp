import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose"
import contact from "./models/contact.js";
import dotenv from "dotenv"
import Cors from "cors"
dotenv.config();


const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(Cors())




mongoose.connect(process.env.MONGODB).then(()=>console.log("connected to db"))

app.post("/add",(req,res)=>{
  const {name,number}=req.body
 
const newContact= new contact ({
name,number
})
newContact.save().then(()=>res.send("done"))

})

app.get("/getData",(req,res)=>{
  res.json({name:"lukmaan",number:91019})
  
})


app.listen(3000,()=>console.log("connected to port 3000"))