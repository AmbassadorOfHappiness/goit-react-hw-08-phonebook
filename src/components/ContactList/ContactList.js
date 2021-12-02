import React from "react";
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import ContactListItem from './ContactListItem';
import style from './ContactList.module.css';
import { useGetContactsQuery} from '../../redux/contacts/slice';


const ContactList = () => {
  let contacts;
  const { data, isFetching } = useGetContactsQuery();

  const contact = useSelector(state => state.contacts.filter);
  if (data) {
    const normalizedFilter = contact.toLowerCase();
    contacts = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  return (
    <>
      {isFetching && <Spinner className={style.title} />}
      {contacts && 
        <ul className={style.title}>
          {contacts.map(contact => (
            <ContactListItem
              key={contact.id}
              {...contact}
            />
          ))}
        </ul>
      }
    </>
  );

/*   return (
    <>
      {isFetching && <Loader className={style.title} type="BallTriangle" color="#00BFFF" height={80} width={80} />}
      {contacts && 
        <ul className={style.title}>
          {contacts.map(({ id, name, phone }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              phone={phone}
              onRemoveContact={()=> deleteContact(id)}
            />
          ))}
        </ul>
      }
    </>
  ); */
}

export default ContactList;
