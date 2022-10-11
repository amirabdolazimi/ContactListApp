import http from "./httpServices";

const editContact = (id, newContact) => {
  return http.put(`/contacts/${id}`, newContact);
};

export default editContact;
