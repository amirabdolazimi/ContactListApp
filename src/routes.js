import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import ContactPage from "./Pages/ContactPage";
import ContactFormPage from "./Pages/ContactFormPage";
import EditContact from "./components/EditContact/EditContact";

const routes = [
  // id can be different - for example : blogNumber (we should take that on params with his name )
  { path: "/contacts/:id", component: ContactPage },
  { path: "/edit/:id", component: EditContact },
  { path: "/add-contact", component: ContactFormPage },
  { path: "/", component: HomePage, exact: true },
  { path: "*", component: NotFound },
];

export default routes;

// ([1-9])
// ([A-Za-z])
