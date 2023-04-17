import axios from "axios";
axios.defaults.baseURL =
  "https://interesting-archimedes-4x-peeezt.iran.liara.run";
const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;
