import css from "./style.module.css";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";


const App = () => {

  return (
    <div className={css.appStyle}>
      <div className={css.phonebook}>
        <h1><b>Phonebook</b></h1>
        <Form />
      </div>
      <div>
        <h1><b>Contacts</b></h1>
        <Filter />
        <ContactsList />
      </div>
    </div>
  );
};


export default App;
