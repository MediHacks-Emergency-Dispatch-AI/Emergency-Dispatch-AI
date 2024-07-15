import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConversationalAIPage from './pages/ConversationalAIPage';
import TrainingPage from './pages/TrainingPage';
import ResourcesPage from './pages/ResourcesPage';
import CommunityPage from './pages/CommunityPage';
import EmergencyAssistancePage from './pages/EmergencyAssistancePage';
import LoginSignupPage from './pages/LoginSignupPage';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/conversational-ai" element={<ConversationalAIPage />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/emergency-assistance" element={<EmergencyAssistancePage />} />
                <Route path="/login-signup" element={<LoginSignupPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
