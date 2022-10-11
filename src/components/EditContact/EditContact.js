import { useEffect, useRef, useState } from "react";
import editContact from "../../Services/editContactService";
import getOneContact from "../../Services/getOneContactService";
import style from "../EditContact/EditContact.module.css";
const EditContact = ({ history, match }) => {
  const id = match.params.id;
  const [formValues, setFormValues] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.email) {
      editContact(id, formValues)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("All Fields Are Mandatory");
    }
    setFormValues({ name: "", email: "" });
    history.push("/");
  };
  const localFetch = async () => {
    try {
      const { data } = await getOneContact(id);
      setFormValues({ name: data.name, email: data.email });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    inputRef.current.focus();
    localFetch();
  }, []);

  return (
    <form className={style.formControl} onSubmit={submitHandler}>
      <h2>Update Contact</h2>
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
        Update
      </button>
    </form>
  );
};

export default EditContact;
