import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../store/slices/contactSlice";
import axios from "axios";
import Contact from "../components/contact/contacts";

const ContactPage = () => {
  const dispacth = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const result = await axios
        .get("http://localhost:3000/getData")
        .then((res) => res.data)
        .catch((err) => console.log(err));
      dispacth(addContact(result));
      
    };

    getData();
  }, []);
  const allContacts = useSelector((state) => state.contact);
  const data=allContacts.map((items)=>items);
  data.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  console.log(data);
  return (
    <div className="Pages ">
      {data.map((item, index) => {
        return <Contact key={index} name={item.name} />;
      })}
      
    </div>
  );
};

export default ContactPage;
