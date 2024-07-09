import React from 'react';
import './EmergencyAssistancePage.css';

function EmergencyAssistancePage() {
    return (
        <div className="emergency-assistance-page">
            <section className="introduction">
                <h1>Emergency Assistance for Individuals with Disabilities</h1>
                <p>This page provides tools and resources to support individuals with disabilities during emergencies. Use the features below to get assistance tailored to your needs.</p>
            </section>

            <section className="text-reporting">
                <h2>Text-Based Emergency Reporting</h2>
                <p>Type your emergency message below and send it directly to our emergency dispatch system. This feature is especially useful for users with hearing or speech impairments.</p>
                <input type="text" className="text-input" placeholder="Type your emergency message here..." />
                <button className="send-button">Send</button>
                <button className="live-chat-button">Live Chat with Dispatcher</button>
            </section>

            <section className="speech-to-text">
                <h2>Speech-to-Text and Text-to-Speech</h2>
                <p>These features help users with visual impairments or those unable to use standard phone interfaces. Use the buttons below to activate speech-to-text and text-to-speech functionalities.</p>
                <button className="speech-input-button">Activate Speech-to-Text</button>
                <div className="text-output-box">Transcribed text will appear here...</div>
                <input type="text" className="text-input-box" placeholder="Type your response here..." />
                <button className="speech-output-button">Convert to Speech</button>
            </section>

            <section className="custom-protocols">
                <h2>Custom Emergency Protocols</h2>
                <p>Access custom protocols tailored for different disabilities. Use the search bar and filters to find specific protocols quickly.</p>
                <input type="text" className="search-bar" placeholder="Search protocols..." />
                <div className="protocol-list">
                    <div className="protocol-item">
                        <p>Protocol Description</p>
                        <a href="/path/to/protocol.pdf" className="download-link">Download PDF</a>
                    </div>
                    <!-- Repeat protocol-item as needed -->
                </div>
            </section>

            <section className="dispatcher-training">
                <h2>Specialized Dispatcher Training</h2>
                <p>Our training programs equip dispatchers with the skills to handle emergencies involving individuals with disabilities. Sign up for available training modules below.</p>
                <div className="training-modules">
                    <div className="training-module-item">
                        <p>Training Module Description</p>
                        <a href="/path/to/training-module" className="access-link">Access Module</a>
                    </div>
                    <!-- Repeat training-module-item as needed -->
                </div>
                <button className="sign-up-button">Sign Up for Training</button>
            </section>
        </div>
    );
}

export default EmergencyAssistancePage;
