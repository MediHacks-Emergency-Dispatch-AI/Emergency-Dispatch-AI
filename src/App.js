// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ConversationalAIPage from './pages/ConversationalAIPage';
import FeaturesPage from './pages/FeaturesPage';
import TrainingPage from './pages/TrainingPage';
import ResourcesPage from './pages/ResourcesPage';
import CommunityPage from './pages/CommunityPage';
import ContactUsPage from './pages/ContactUsPage';
import LoginSignupPage from './pages/LoginSignupPage';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/conversational-ai" component={ConversationalAIPage} />
                <Route path="/features" component={FeaturesPage} />
                <Route path="/training" component={TrainingPage} />
                <Route path="/resources" component={ResourcesPage} />
                <Route path="/community" component={CommunityPage} />
                <Route path="/contact-us" component={ContactUsPage} />
                <Route path="/login-signup" component={LoginSignupPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
