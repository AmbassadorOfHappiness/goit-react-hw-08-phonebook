import React from 'react';
import style from './ContactList.module.css';
import Spinner from '../Spinner/Spinner';
import { useDeleteContactMutation } from '../../redux/contacts/slice';
const ContactListItem = ({ name, phone, id }) => {
    const [deleteContact, { isLoading: isDeleting}] = useDeleteContactMutation();
  return (
    <li className={style.formInner}>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <button
        type="button"
        className='button'
        onClick={() => deleteContact(id)} disabled={isDeleting}
      >
        Delete <span>{isDeleting && <Spinner size={20}/> }</span>
      </button>
    </li>
)};

export default ContactListItem;