import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../redux/auth/thunks';

export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                alert(`Check input name please`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, email, password };
        dispatch( registerThunk(user) );
        reset();
    };

    const reset = () => {
        setName("");
        setEmail("");
        setPassword("");
     };
    
    return (
        <>
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="name" 
                value={name} 
                placeholder="Name" 
                onChange={handleChange} />
            <input 
                type="mail" 
                name="email" 
                value={email} 
                placeholder="Email" 
                onChange={handleChange} />
            <input 
                type="password" 
                name="password" 
                value={password} 
                placeholder="Password" 
                onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
        </>
    );
} 

//   "name": "Adrian Cross",
//   "email": "across@mail.com",
//   "password": "examplepassword"
