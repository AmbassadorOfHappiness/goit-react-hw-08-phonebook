import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import contactsOperations from '../redux/contacts/contacts-operations';
import Loader from 'react-loader-spinner';
import { isContactLoading } from '../redux/contacts/contacts-selectors';
import styles from '../App.module.css';

const ContactsView = () => {
  const isLoadingContacts = useSelector(isContactLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter />
      {isLoadingContacts && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      <ContactList />
    </div>
  );
};

export default ContactsView;
