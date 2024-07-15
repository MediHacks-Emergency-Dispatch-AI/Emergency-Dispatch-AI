import React, { useState } from 'react';
import axios from 'axios';
import './EmergencyAssistancePage.css';

function EmergencyAssistancePage() {
    const [textMessage, setTextMessage] = useState('');
    const [speechToTextResult, setSpeechToTextResult] = useState('');
    const [textToSpeechMessage, setTextToSpeechMessage] = useState('');
    const [audioFile, setAudioFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleTextReport = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/emergency/text-report', { message: textMessage });
            alert('Message sent successfully!');
            setTextMessage('');
        } catch (error) {
            console.error('Error sending text report:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEmergencyAlert = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/emergency/text-report', {
                message: 'I am in danger! This is my current location.'
            });
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const locationMessage = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
                    await axios.post('/api/emergency/text-report', { message: locationMessage });
                    alert('Emergency alert sent successfully!');
                }, (error) => {
                    console.error('Error getting location:', error);
                    alert('Emergency alert sent without location due to error.');
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        } catch (error) {
            console.error('Error sending emergency alert:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSpeechToText = async () => {
        if (!audioFile) {
            alert('Please upload an audio file first.');
            return;
        }

        const formData = new FormData();
        formData.append('audio', audioFile);

        try {
            setLoading(true);
            const response = await axios.post('/api/emergency/speech-to-text', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setSpeechToTextResult(response.data.transcription);
        } catch (error) {
            console.error('Error with speech-to-text:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleTextToSpeech = async () => {
        try {
            setLoading(true);
            const response = await axios.post('/api/emergency/text-to-speech', { text: textToSpeechMessage }, {
                responseType: 'blob',
            });

            const audioUrl = URL.createObjectURL(new Blob([response.data], { type: 'audio/wav' }));
            const audio = new Audio(audioUrl);
            audio.play();
        } catch (error) {
            console.error('Error with text-to-speech:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="emergency-assistance-page-unique">
            <section className="introduction-unique">
                <h1>Emergency Assistance for Individuals with Disabilities</h1>
                <p>This page provides tools and resources to support individuals with disabilities during emergencies. Use the features below to get assistance tailored to your needs.The Emergency Alert button on our Emergency Assistance page ensures your safety with a single click. When pressed, it instantly notifies a dispatcher, sharing your real-time location using the browser's Geolocation API. This quick and efficient feature ensures help is always on the way when you need it most.</p>
            </section>

            <section className="text-reporting-unique">
                <h2>Text-Based Emergency Reporting</h2>
                <p>Introducing Text-Based Emergency Reporting – a vital tool for users with hearing or speech impairments. Simply type your emergency message below and send it directly to our emergency dispatch system. This feature ensures you can quickly and effectively communicate your situation, receiving the urgent help you need without barriers. Stay safe and connected with our accessible emergency reporting service.</p>
                <input
                    type="text"
                    className="text-input-unique"
                    placeholder="Type your emergency message here..."
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                />
                <button className="send-button-unique" onClick={handleTextReport}>Send</button>
                <button className="live-chat-button-unique">Live Chat with Dispatcher</button>
                <br /> {/* Added line break here */}
                <button className="emergency-alert-button" onClick={handleEmergencyAlert}>Emergency Alert</button>
            </section>

            <section className="speech-to-text-unique">
                <h2>Speech-to-Text and Text-to-Speech</h2>
                <p>Introducing Speech-to-Text and Text-to-Speech – essential features for users with visual impairments or those unable to use standard phone interfaces. Use the buttons below to seamlessly activate these functionalities. Easily convert your spoken words into text or have text read aloud, ensuring effective communication and accessibility. Stay connected with these innovative tools, tailored to enhance your emergency reporting experience.</p>
                <input
                    type="file"
                    accept="audio/*"
                    className="file-input-unique"
                    onChange={(e) => setAudioFile(e.target.files[0])}
                />
                <button className="speech-input-button-unique" onClick={handleSpeechToText}>Activate Speech-to-Text</button>
                <div className="text-output-box-unique">{speechToTextResult}</div>
                <input
                    type="text"
                    className="text-input-box-unique"
                    placeholder="Type your response here..."
                    value={textToSpeechMessage}
                    onChange={(e) => setTextToSpeechMessage(e.target.value)}
                />
                <button className="speech-output-button-unique" onClick={handleTextToSpeech}>Convert to Speech</button>
            </section>

            {loading && <p className="loading-unique">Loading...</p>}

            <img src="/thankyou.png" alt="Thank You" className="thank-you-image-unique" />
        </div>
    );
}

export default EmergencyAssistancePage;
