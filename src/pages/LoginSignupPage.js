import React, { useState } from 'react';
import './LoginSignupPage.css';

function LoginSignupPage() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-signup-page">
            <header className="auth-header">
                <h1>Emergency Dispatch AI</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
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

                    {isLogin ? (
                        <div id="login-form" className="form active">
                            <h2>Log In</h2>
                            <form>
                                <label htmlFor="login-email">Email</label>
                                <input type="email" id="login-email" required />

                                <label htmlFor="login-password">Password</label>
                                <input type="password" id="login-password" required />

                                <button type="submit">Log In</button>
                                <a href="#" className="forgot-password">Forgot Password?</a>
                            </form>
                            <div className="social-login">
                                <button className="google-login">Log in with Google</button>
                                <button className="facebook-login">Log in with Facebook</button>
                            </div>
                        </div>
                    ) : (
                        <div id="signup-form" className="form">
                            <h2>Sign Up</h2>
                            <form>
                                <label htmlFor="signup-name">Name</label>
                                <input type="text" id="signup-name" required />

                                <label htmlFor="signup-email">Email</label>
                                <input type="email" id="signup-email" required />

                                <label htmlFor="signup-password">Password</label>
                                <input type="password" id="signup-password" required />

                                <label htmlFor="signup-confirm-password">Confirm Password</label>
                                <input type="password" id="signup-confirm-password" required />

                                <button type="submit">Sign Up</button>
                            </form>
                            <div className="social-signup">
                                <button className="google-signup">Sign up with Google</button>
                                <button className="facebook-signup">Sign up with Facebook</button>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <footer className="auth-footer">
                <div className="quick-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
                <div className="contact-info">
                    <p>Support: support@example.com</p>
                </div>
            </footer>
        </div>
    );
}

export default LoginSignupPage;
