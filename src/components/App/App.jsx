import css from "./style.module.css";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactsList";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";


const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  console.log('contacts', contacts)
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div className={css.appStyle}>
      {isLoading && !error && <b>Request in progress...</b>}
      <div className={css.phonebook}>
        <h1><b>Phonebook</b></h1>
        <Form />
      </div>
      <div>
        <h1><b>Contacts</b></h1>
        {contacts.length > 0 ? <Filter /> : <p>You don't have any contact</p>}
        {contacts.length > 0 && <ContactsList />}
      </div>
    </div>
  );
};


export default App;
