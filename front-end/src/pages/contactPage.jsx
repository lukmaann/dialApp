import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../store/slices/contactSlice";

const ContactPage = () => {
  const data=useSelector((state)=>state.contact)
  const dispatch=useDispatch();
  useEffect(()=>{
    const data=async()=>{
      const result=await fetch("http://localhost:3000/getData");
      const jsondata= await result.json();
      dispatch(addContact(jsondata))

    }
    data();
  },[])
  return (
    <div className="Pages">{data[0].number}</div>
  )
}

export default ContactPage