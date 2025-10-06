import React from "react";
import css from "../App/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";


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
  
  const handlerClick = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {capitalize(contact.name)}: {contact.number}
          <button
            type="button"
            name={contact.name}
            onClick={() => handlerClick(contact.id)}
            className={css.delBtn}>
          Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


export default ContactsList;