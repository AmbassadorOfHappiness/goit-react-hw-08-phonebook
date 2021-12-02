import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '../ContactForm/ContactForm.module.css'
import { useGetContactsQuery, useAddContactMutation} from '../../redux/contacts/slice';

export default function ContactForm() {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;
    if (data.find((el) => el.name.toLowerCase() === name.toLowerCase())) {
      toast(`🦄 Wow so easy! ${name} is already in contacts`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      addContact({ name, phone});
    }
    e.currentTarget.reset();
  };
    
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form className={style.formInner} onSubmit={handleSubmit} >
        <label>Name: 
          <input
            className='input'
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Enter name"
          />
          </label>
           <label>Number:
          <input
            className='input'
            name="number"
            type="tel"
            autoComplete="off"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Enter phone number"
            required
          />
           </label>
        <button className='button' type="submit">Add contact</button>
      </form>
    </>
  );
}
