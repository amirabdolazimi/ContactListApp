import http from "./httpServices";

const getOneContacts = (id) => {
  return http.get(`/contacts/${id}`);
};

export default getOneContacts;
