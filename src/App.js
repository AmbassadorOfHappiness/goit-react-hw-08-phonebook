import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, Routes, Route  } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { currentThunk, logoutThunk } from './redux/auth/thunks';
import {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation
} from './redux/auth/slices';

const isAuth = false;

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);
  
  const handleLogout = () => {
    dispatch(logoutThunk());
  }

  const { data } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();
  const [ removeContact ] = useRemoveContactMutation();
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        alert(`Check input name`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { name, phone };
    addContact(contact);
    reset();
  }; 

  const reset = () => {
    setName("");
    setPhone("");
  };

  const handleRemove = (e) => {
    removeContact(e.target.id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <button type="button" onClick={handleLogout}>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>ADD CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handleChange} />
            <input
              type="tel"
              name="phone"
              value={phone}
              placeholder="Phone"
              onChange={handleChange} />
            <button type="submit">Add</button>
          </form>
        </section>

        {data && data.map(x => {
          return <li key={x.id}>{x.name}
            <button id={x.id} type="button" onClick={handleRemove}>DELETE</button>
          </li>
        })}
        {/* Switch => Routes
        exact => -
        component => element */}
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} component={Home} />} />
          <Route path="/login" element={<PublicRoute isAuth={isAuth} component={Login} />} />
          <Route path="/register" element={<PublicRoute isAuth={isAuth} component={Register} />} />
        </Routes>
      </main>
    </div>
  );
}
