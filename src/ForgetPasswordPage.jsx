import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'; // Import Modal component from react-modal
import axios from 'axios';

const ForgetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [randomString, setRandomString] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const generateRandomString = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 8; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make POST request to forgot password endpoint
             await axios.post('http://localhost:5000/api/forgot-password', { email });
            // Assuming the backend sends back a response with the random string
            const randomStr = generateRandomString(); // Generate random string
            setRandomString(randomStr); // Update randomString state with the received random string
            setIsModalOpen(true); // Open the modal
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <form onSubmit={handleForgotPasswordSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Send Reset Email</button>
            </form>
            <Link to="/">Login</Link>

            {/* Modal for password reset */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Forgot Password Modal"
            >
                <h2>Reset Password</h2>
                <p>Random String: {randomString}</p>
                {/* Add form fields for new password and confirm password */}
                {/* Add logic to handle password reset */}
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default ForgetPasswordPage;
