import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Add = () => {
  const navigate = useNavigate();

  const number = useSelector((state) => state.dial);
  const [contact, setcontact] = useState({ name: "", number: "" });
  useEffect(() => {
    setcontact({ ...contact, number: number });
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setcontact({ ...contact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, number } = contact;
    await axios.post("http://localhost:3000/add", {
      name: name,
      number: number,
    });

    // console.log(result);
    navigate("/");
  };

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

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
