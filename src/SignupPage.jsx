import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signup', formData);
            console.log(response.data); // Assuming the backend returns user data upon successful signup
            // Handle successful signup (e.g., redirect user to login page)
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to sign up. Please try again.'); // Set error message for display
        }
    };

    return (
        <div className="container">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Link to="/login">Login</Link>
        </div>
    );
};

export default SignupPage;
