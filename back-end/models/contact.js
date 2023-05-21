import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
   name:String,
   number:String
})

const contact= new mongoose.model("contact",contactSchema);

export default contact