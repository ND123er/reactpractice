// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';  // Example route for authenticated users
import OrganizationRegister from './pages/OrganizationRegister'; // Another example route
import PrivateRoute from './components/PrivateRoute';  // Import PrivateRoute
import './App.css'
function App() {
    return (
        <Router>
            <Routes>
                {/* Public Route: Login Form */}
                <Route path="/" element={<LoginForm />} />

                {/* Protected Route: Dashboard (requires authentication) */}
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />

                {/* Public Route: Organization Registration */}
                <Route path="/orgRegister" element={<OrganizationRegister />} />
            </Routes>
        </Router>
    );
}

export default App;