import React from 'react';
import './TrainingPage.css';

function TrainingPage() {
  return (
    <div className="training-page">
      <section className="introduction">
        <h1>Training Scenario Generation</h1>
        <p>Our Training Scenario Generation model is designed to help dispatchers engage with various training scenarios, track their progress, and receive feedback. Explore the interactive scenario generator below to get started.</p>
      </section>

      <section className="interactive-training">
        <h2>Generate a Training Scenario</h2>
        <p>Select the type of emergency and difficulty level to generate a training scenario.</p>
        <div className="interactive-area">
          <select className="dropdown">
            <option value="medical">Medical</option>
            <option value="fire">Fire</option>
            <option value="police">Police</option>
          </select>
          <select className="dropdown">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className="generate-button">Generate Scenario</button>
        </div>
        <div className="scenario-display">
          <h3>Scenario Description:</h3>
          <p>Your generated scenario will appear here...</p>
          <button className="start-button">Start Scenario</button>
          <div className="response-options">
            <h3>Response Options:</h3>
            <p>Interactive options will appear here...</p>
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
      </section>
    </div>
  );
}

export default TrainingPage;
