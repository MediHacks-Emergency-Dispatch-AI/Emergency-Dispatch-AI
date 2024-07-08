import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Emergency Dispatch AI</Link>
      </div>
      <NavigationBar />
    </header>
  );
}

export default Header;
