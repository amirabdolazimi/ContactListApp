import ContactList from "../components/ContactList/ContactList";

const HomePage = (props) => {
  return (
    <>
      <h2>Wellcome to the ContactList !</h2>
      <ContactList {...props} />
    </>
  );
};

export default HomePage;
