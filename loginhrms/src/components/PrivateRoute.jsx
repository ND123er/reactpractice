// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
    // Check if there is a valid token in localStorage or cookies
    const token = Cookies.get('auth_token') || localStorage.getItem('token');

    if (!token) {
        // If there's no token, redirect to the login page
        return <Navigate to="/" />;
    }

    // If there's a token, render the children (protected component)
    return children;
};

export default PrivateRoute;