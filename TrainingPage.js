import React, { useState } from 'react';
import './TrainingPage.css';

function TrainingPage() {
    const [scenario, setScenario] = useState('');
    const [responseOptions, setResponseOptions] = useState([]);
    const [emergencyType, setEmergencyType] = useState('Medical');
    const [difficultyLevel, setDifficultyLevel] = useState('Easy');

    const generateScenario = async () => {
        try {
            const response = await fetch('http://localhost:5000/generate_scenario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setScenario(data.description);
            setResponseOptions(data.response_options);
        } catch (error) {
            console.error('Failed to fetch:', error);
        }
    };

    return (
        <div className="training-page">
            <section className="introduction">
                <h1>Training Scenario Generation</h1>
                <p>
                    Our Training Scenario Generation model is designed to help dispatchers engage with various training scenarios, track their progress, and receive feedback. Explore the interactive scenario generator below to get started.
                </p>
                <img src="/UnderProgress.png" alt="Under Progress" className="under-progress-image" />
            </section>

            <section className="interactive-training">
                <h2>Generate a Training Scenario</h2>
                <p>Select the type of emergency and difficulty level to generate a training scenario.</p>
                <div className="interactive-area">
                    <select className="dropdown" value={emergencyType} onChange={(e) => setEmergencyType(e.target.value)}>
                        <option value="Medical">Medical</option>
                        <option value="Fire">Fire</option>
                        <option value="Police">Police</option>
                    </select>
                    <select className="dropdown" value={difficultyLevel} onChange={(e) => setDifficultyLevel(e.target.value)}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Difficult">Difficult</option>
                    </select>
                    <button className="generate-button" onClick={generateScenario}>Generate Scenario</button>
                </div>
                <div className="scenario-display">
                    <h3>Scenario Description:</h3>
                    <p>{scenario || "Your generated scenario will appear here..."}</p>
                    <button className="start-button">Start Scenario</button>
                    <div className="response-options">
                        <h3>Response Options:</h3>
                        <ul>
                            {responseOptions.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="performance-analytics">
                <h2>Performance Analytics</h2>
                <div className="analytics-dashboard">
                    <div className="overall-performance">
                        <h3>Overall Performance</h3>
                        <p>Graph showing overall performance over time will appear here...</p>
                    </div>
                    <div className="individual-scenario-performance">
                        <h3>Individual Scenario Performance</h3>
                        <p>Performance metrics for each scenario completed will appear here...</p>
                    </div>
                    <div className="strengths-areas-improvement">
                        <h3>Strengths and Areas for Improvement</h3>
                        <p>Text or graphical representation highlighting strengths and areas where improvement is needed will appear here...</p>
                    </div>
                </div>
            </section>

            <section className="certification">
                <h2>Certification</h2>
                <div className="certification-progress">
                    <h3>Certification Progress Tracker</h3>
                    <div className="progress-bar">Visual progress bar will appear here...</div>
                    <div className="completed-modules">
                        <h3>Completed Modules</h3>
                        <p>List of completed training modules will appear here...</p>
                    </div>
                    <div className="upcoming-modules">
                        <h3>Upcoming Modules</h3>
                        <p>List of upcoming or remaining modules required for certification will appear here...</p>
                    </div>
                    <button className="download-certificate-button">Download Certificate</button>
                </div>
                <h2 className="visualization-title">AI Model Visualizations</h2>
                <div className="visualization-images">
                    <img src="/a.png" alt="A" />
                    <img src="/b.png" alt="B" />
                    <img src="/c.png" alt="C" />
                    <img src="/d.png" alt="D" />
                </div>
            </section>
        </div>
    );
}

export default TrainingPage;
