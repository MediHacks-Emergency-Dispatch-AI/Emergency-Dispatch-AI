// src/pages/ConversationalAIPage.js
import React, { useState } from 'react';
import './ConversationalAIPage.css';

function ConversationalAIPage() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async () => {
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: query }),
        });
        const data = await res.json();
        setResponse(data.response);
    };

    return (
        <div className="conversational-ai-page">
            <section className="introduction">
                <h1>Conversational AI Model</h1>
                <p>Discover how our Conversational AI transforms dispatcher operations with real-time support and advanced training. Seamlessly integrated with emergency systems, it enhances efficiency and response times. Experience it in action by exploring the live demo below. If You Are A Dispatcher, please ignore the Call 911 Output, it was meant to help the General Public</p>
            </section>

            <section className="live-demo">
                <h2>Live Demo</h2>
                <p>Type your query below or use the microphone for voice input.</p>
                <div className="interactive-area">
                    <input
                        type="text"
                        placeholder="Type your emergency query here..."
                        className="text-input"
                        value={query}
                        onChange={handleInputChange}
                    />
                    <button className="submit-button" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
                <div className="response-output-box">
                    <p>{response ? response : 'Your AI response will appear here...'}</p>
                </div>
            </section>

            <section className="visualization">
                <h2>AI Performance and Data Visualization</h2>
                <div className="image-container">
                    <img src="/22.png" alt="Data Visualization 22" />
                    <img src="/33.png" alt="Data Visualization 33" />
                    <img src="/Graph3.png" alt="Graph 3" />
                </div>
            </section>
        </div>
    );
}

export default ConversationalAIPage;
