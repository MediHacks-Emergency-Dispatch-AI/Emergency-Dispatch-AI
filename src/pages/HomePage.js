// src/pages/HomePage.js
import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content">
                    <h1>Revolutionizing Emergency Response with AI</h1>
                    <p>Empowering dispatchers with real-time assistance, advanced training, and seamless integration.</p>
                    <div className="cta-buttons">
                        <button className="primary">Get Started</button>
                        <button className="secondary">Learn More</button>
                    </div>
                </div>
            </section>
            <section className="key-features">
                <h2>Why Choose Our System?</h2>
                <div className="features-grid">
                    <div className="feature">
                        <h3>Dynamic Protocol Updates</h3>
                        <p>Stay updated with the latest protocols.</p>
                    </div>
                    <div className="feature">
                        <h3>Voice Recognition</h3>
                        <p>Analyze caller tone and urgency.</p>
                    </div>
                    <div className="feature">
                        <h3>Multilingual Support</h3>
                        <p>Cater to non-English speakers.</p>
                    </div>
                    <div className="feature">
                        <h3>Training Modules</h3>
                        <p>Interactive training scenarios.</p>
                    </div>
                    <div className="feature">
                        <h3>Integration with Systems</h3>
                        <p>Seamless integration with emergency systems.</p>
                    </div>
                    <div className="feature">
                        <h3>User Experience</h3>
                        <p>Enhanced user interface for efficiency.</p>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="carousel">
                    <div className="testimonial">
                        <p>"This system has revolutionized our dispatch operations!"</p>
                        <h4>Jane Doe</h4>
                    </div>
                    <div className="testimonial">
                        <p>"The AI's real-time assistance is unparalleled."</p>
                        <h4>John Smith</h4>
                    </div>
                </div>
            </section>
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>Step 1</h3>
                        <p>Register and set up your profile.</p>
                    </div>
                    <div className="step">
                        <h3>Step 2</h3>
                        <p>Access the training modules.</p>
                    </div>
                    <div className="step">
                        <h3>Step 3</h3>
                        <p>Get real-time assistance during dispatch.</p>
                    </div>
                    <div className="step">
                        <h3>Step 4</h3>
                        <p>Review your performance and get certified.</p>
                    </div>
                </div>
            </section>
            <section className="recent-news">
                <h2>Latest News</h2>
                <div className="articles">
                    <article>
                        <h3>New AI Feature Released</h3>
                        <p>Check out our latest updates and improvements.</p>
                    </article>
                    <article>
                        <h3>Dispatch Center Success Story</h3>
                        <p>Learn how our system improved efficiency in XYZ city.</p>
                    </article>
                </div>
            </section>
            <section className="call-to-action">
                <h2>Ready to Revolutionize Your Dispatch?</h2>
                <button>Get Started Today</button>
            </section>
        </div>
    );
}

export default HomePage;
