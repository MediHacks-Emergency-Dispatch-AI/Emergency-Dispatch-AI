import React, { useState } from 'react';
import './LoginSignupPage.css';
import authService from '../services/authService';

function LoginSignupPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await authService.login(email, password);
            localStorage.setItem('user', JSON.stringify(data));
            setMessage('Login successful');
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const data = await authService.register(name, email, password);
            localStorage.setItem('user', JSON.stringify(data));
            setMessage('Signup successful');
        } catch (error) {
            setMessage('Signup failed. Please try again.');
        }
    };

    return (
        <div className="login-signup-page">
            <header className="auth-header">
                <h1>Emergency Dispatch AI</h1>
                <nav>
                    <ul>
                        {/* Removed the home page link */}
                    </ul>
                </nav>
            </header>

            <section className="auth-container">
                <div className="form-card">
                    <div className="tabs">
                        <button
                            id="login-tab"
                            className={isLogin ? 'active' : ''}
                            onClick={toggleForm}
                        >
                            Log In
                        </button>
                        <button
                            id="signup-tab"
                            className={!isLogin ? 'active' : ''}
                            onClick={toggleForm}
                        >
                            Sign Up
                        </button>
                    </div>

                    {message && <div className="message">{message}</div>}

                    <div className={isLogin ? 'form active' : 'form'}>
                        <h2>Log In</h2>
                        <form onSubmit={handleLogin}>
                            <label htmlFor="login-email">Email</label>
                            <input
                                type="email"
                                id="login-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label htmlFor="login-password">Password</label>
                            <input
                                type="password"
                                id="login-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <button type="submit">Log In</button>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </form>
                        <div className="social-login">
                            <button className="google-login">Log in with Google</button>
                            <button className="facebook-login">Log in with Facebook</button>
                        </div>
                    </div>

                    <div className={!isLogin ? 'form active' : 'form'}>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSignup}>
                            <label htmlFor="signup-name">Name</label>
                            <input
                                type="text"
                                id="signup-name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label htmlFor="signup-email">Email</label>
                            <input
                                type="email"
                                id="signup-email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <label htmlFor="signup-password">Password</label>
                            <input
                                type="password"
                                id="signup-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <label htmlFor="signup-confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="signup-confirm-password"
                                required
                            />

                            <button type="submit">Sign Up</button>
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </form>
                        <div className="social-signup">
                            <button className="google-signup">Sign up with Google</button>
                            <button className="facebook-signup">Sign up with Facebook</button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="auth-footer">
                <div className="quick-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="contact-info">
                    <p>Support:  backuplaptop.hp1drive@gmail.com</p>
                </div>
            </footer>
        </div>
    );
}

export default LoginSignupPage;
