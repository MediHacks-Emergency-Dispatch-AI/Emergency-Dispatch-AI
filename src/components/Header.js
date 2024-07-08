// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Emergency Dispatch AI</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/conversational-ai">Conversational AI</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/training">Training</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/login-signup">Login/Signup</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
