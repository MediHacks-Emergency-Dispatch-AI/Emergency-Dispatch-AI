import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/conversational-ai">Conversation-AI</Link></li>
                <li><Link to="/training">Training</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/emergency-assistance">Emergency-Assistance</Link></li>
                <li><Link to="/login-signup">Login/Signup</Link></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
