import React from 'react';
import './ConversationalAIPage.css';

function ConversationalAIPage() {
    return (
        <div className="conversational-ai-page">
            <section className="introduction">
                <h1>Conversational AI Model</h1>
                <p>Our Conversational AI model is designed to assist dispatchers in real-time, providing advanced training and seamless integration with emergency systems. Explore the live demo below to see it in action.</p>
            </section>

            <section className="live-demo">
                <h2>Live Demo</h2>
                <p>Type your query below or use the microphone for voice input.</p>
                <div className="interactive-area">
                    <input type="text" placeholder="Type your emergency query here..." className="text-input" />
                    <button className="voice-input">
                        <i className="fas fa-microphone"></i>
                    </button>
                    <button className="submit-button">Submit</button>
                </div>
                <div className="response-output-box">
                    <p>Your AI response will appear here...</p>
                </div>
            </section>

            <section className="feature-highlights">
                <h2>Feature Highlights</h2>

                <div className="feature">
                    <h3>Dynamic Protocol Updates</h3>
                    <p>Stay updated with the latest protocols. Our AI ensures that you are always following the most current guidelines.</p>
                    <div className="visual-example">
                        <img src="/path/to/protocol-update.png" alt="Dynamic Protocol Updates" />
                    </div>
                </div>

                <div className="feature">
                    <h3>Voice Recognition and Analysis</h3>
                    <p>Analyze caller tone and urgency. The AI can interpret the caller's tone to assess the situation more accurately.</p>
                    <div className="audio-example">
                        <audio controls>
                            <source src="/path/to/audio-sample.mp3" type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>

                <div className="feature">
                    <h3>Multilingual Support</h3>
                    <p>Cater to non-English speakers. The AI can respond in multiple languages to assist a wider audience.</p>
                    <div className="language-example">
                        <select>
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                            <!-- Add more languages as needed -->
                        </select>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>Testimonials and Case Studies</h2>

                <div className="testimonial">
                    <img src="/path/to/user1.jpg" alt="User 1" />
                    <p>"This system has revolutionized our dispatch operations!" - Jane Doe</p>
                </div>

                <div className="testimonial">
                    <img src="/path/to/user2.jpg" alt="User 2" />
                    <p>"The AI's real-time assistance is unparalleled." - John Smith</p>
                </div>

                <div className="case-study">
                    <h3>Case Study: City XYZ</h3>
                    <p>Learn how our AI improved response times by 30% in City XYZ. Before-and-after analysis shows significant enhancements in dispatcher efficiency.</p>
                </div>
            </section>
        </div>
    );
}

export default ConversationalAIPage;
