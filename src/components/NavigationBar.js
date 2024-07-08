import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    return (
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
    );
}

export default NavigationBar;
