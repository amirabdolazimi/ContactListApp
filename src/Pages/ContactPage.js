import { Link } from "react-router-dom";

const ContactPage = ({ location }) => {
  const { name, email } = location.state.contact;
  return (
    <div>
      <h2>Contact Name is : {name} </h2>
      <h2>Contact Email is : {email} </h2>
      <div>
        <Link to="/">get back to HomePage</Link>
      </div>
    </div>
  );
};

export default ContactPage;
