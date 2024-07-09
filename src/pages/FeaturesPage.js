import React from 'react';
import './FeaturesPage.css';

function FeaturesPage() {
  return (
    <div className="features-page">
      <section className="introduction">
        <h1>Voice Recognition and Analysis</h1>
        <p>Our Voice Recognition and Analysis feature is designed to help dispatchers assess caller tone and urgency accurately, ensuring quick and effective responses. Explore the demo below to see it in action.</p>
      </section>

      <section className="interactive-demo">
        <h2>Try Voice Recognition and Analysis</h2>
        <p>Record your voice or upload an audio file to see how the system analyzes it.</p>
        <div className="interactive-area">
          <button className="voice-input">
            <i className="fas fa-microphone"></i> Record Voice
          </button>
          <button className="upload-audio">Upload Audio</button>
        </div>
        <audio className="audio-playback" controls>
          <source src="" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="analysis-output-box">
          <div className="transcription">
            <h3>Transcription:</h3>
            <p>Your audio transcription will appear here...</p>
          </div>
          <div className="tone-analysis">
            <h3>Tone Analysis:</h3>
            <p>Your tone analysis will appear here...</p>
          </div>
          <div className="urgency-level">
            <h3>Urgency Level:</h3>
            <p>Your urgency level will appear here...</p>
          </div>
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
          <p>"The voice recognition feature has drastically improved our response times!" - Jane Doe</p>
        </div>

        <div className="testimonial">
          <img src="/path/to/user2.jpg" alt="User 2" />
          <p>"Being able to analyze the urgency of calls has made our dispatching more efficient." - John Smith</p>
        </div>

        <div className="case-study">
          <h3>Case Study: City XYZ</h3>
          <p>Learn how our voice recognition and analysis feature improved response times by 30% in City XYZ. Before-and-after analysis shows significant enhancements in dispatcher efficiency.</p>
        </div>
      </section>
    </div>
  );
}

export default FeaturesPage;
