import { useEffect, useState } from "react";
import getContacts from "../../Services/getContactsService";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import deleteContact from "../../Services/deleteContactService";
import SearchBar from "../Search/Search";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchContacts();
  }, [contacts, allContacts]);

  const fetchContacts = async () => {
    try {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandler = (e) => {
    setSearchTerm(e);
    const search = e;
    if (search !== " ") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };
  const deleteContactHandler = (id) => {
    deleteContact(id)
      .then(async () => {
        const res = await getContacts();
        return setContacts(res.data);
      })
      .catch((err) => console.log(err));
  };

  const renderContacts = () => {
    if (!contacts.length) return <h3>Add Some Contact !</h3>;

    return contacts.map((c) => {
      return (
        <Contact
          key={c.id}
          contact={c}
          onDelete={() => deleteContactHandler(c.id)}
        />
      );
    });
  };
  return (
    <div className={style.ContactList}>
      <SearchBar onChange={searchHandler} value={searchTerm} />
      <h2>Contacts !</h2>
      {renderContacts()}
    </div>
  );
};

export default ContactList;
