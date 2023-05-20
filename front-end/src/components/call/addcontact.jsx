import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber } from "../../store/slices/dialSlice";

const Add = () => {
  const dispatch = useDispatch();

  const number = useSelector((state) => state.dial);
  const [contact, setcontact] = useState({ name: "", number: "" });
  useEffect(() => {
    setcontact({ ...contact, number: number });
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    
    setcontact({ ...contact, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {name,number}=contact;
    console.log(name,number);
  }



  return (
    <div className="contactForm">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleInput}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone number
          </label>
          <input
            type="text"
            defaultValue={number}
            name="number"
            onChange={handleInput}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
