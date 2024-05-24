import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            console.log(response.data); // Assuming the backend returns user data upon successful login
            // Handle successful login (e.g., redirect user to dashboard)
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Invalid email or password'); // Set error message for display
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Link to="/forgetpassword">Forgot Password</Link>
        </div>
    );
};

export default LoginPage;
