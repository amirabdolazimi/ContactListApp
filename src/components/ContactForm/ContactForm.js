import { useEffect, useRef, useState } from "react";
import style from "./ContactForm.module.css";
import addContact from "../../Services/addContactService";

const ContactForm = ({ history }) => {
  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const inputRef = useRef();
  const postContact = async (formValues) => {
    addContact(formValues)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.email) {
      postContact(formValues);
    } else {
      alert("All Fields Are Mandatory");
    }
    setFormValues({ name: "", email: "" });
    history.push("/");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form className={style.formControl} onSubmit={submitHandler}>
      <h2>Add Contact</h2>
      <div className={style.inputs}>
        <label htmlFor="name">
          <h4>Name</h4>
        </label>
        <input
          value={formValues.name}
          onChange={changeHandler}
          id="name"
          name="name"
          type="text"
          placeholder="Enter Name ..."
          ref={inputRef}
        />
      </div>
      <div className={style.inputs}>
        <label htmlFor="email">
          <h4>Email</h4>
        </label>
        <input
          value={formValues.email}
          onChange={changeHandler}
          id="email"
          name="email"
          type="text"
          placeholder="Enter Email ..."
        />
      </div>
      <button className={`btn ${style.AddBtn}`} type="submit">
        Add
      </button>
    </form>
  );
};

export default ContactForm;
