import React from "react";
import Button from "components/Button/Button";
import css from "../App/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlice";


const ContactsList = () => {

  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const capitalize = (contact) => {
    let newName = contact.split(' ').map(word => (
      word[0].toUpperCase() + word.slice(1)
    )
    ).join(' ');
    return newName
  }
  
  const handlerClick = (evt) => {
    dispatch(deleteContact(evt.target.name));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {capitalize(contact.name)}: {contact.number}
          <Button type="button" name={contact.name} click={handlerClick} className={css.delBtn}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};


export default ContactsList;