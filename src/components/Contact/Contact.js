import style from "./Contact.module.css";
import UserImg from "../../img/icon.png";
import { BiTrash } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className={`${style.Contact} ${style.greyLine}`}>
      <Link
        to={{
          pathname: `/contacts/${contact.id}`,
          state: { contact },
        }}
      >
        <div className={style.ContactDetail}>
          <div className={style.UserImg}>
            <img src={UserImg} alt="UserImage" />
          </div>
          <div className={style.ContactInfo}>
            <h3>{name}</h3>
            <span>{email}</span>
          </div>
        </div>
      </Link>
      <div className={style.contactIcons}>
        <div>
          <Link to={`/edit/${id}`}>
            <FiEdit className={style.editbtn} />
          </Link>
        </div>
        <div className={style.trash} onClick={onDelete}>
          <BiTrash />
        </div>
      </div>
    </div>
  );
};

export default Contact;
