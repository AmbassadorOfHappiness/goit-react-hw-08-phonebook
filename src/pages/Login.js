import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/auth/thunks';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        switch (e.target.name) {
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
        const user = { email, password };
        dispatch( loginThunk(user) );
        reset();
    };

    const reset = () => {
        setEmail("");
        setPassword("");
     };
    
    return (
        <>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
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