import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div className="container">
            <h1>Welcome</h1>
            <div>
                <Link to="/login">
                    <button className="btn btn-primary">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="btn btn-primary">Signup</button>
                </Link>
            </div>
        </div>
    );
};

export default WelcomePage;
