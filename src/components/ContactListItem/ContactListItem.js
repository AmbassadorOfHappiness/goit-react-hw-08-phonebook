import React from 'react';
import styles from '../ContactListItem/contactListItem.module.css';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={styles.formInner}>
      <p>Name: {name}</p>
      <p>Phone: {number}</p>
      <button
        className={styles.buttonDelete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
