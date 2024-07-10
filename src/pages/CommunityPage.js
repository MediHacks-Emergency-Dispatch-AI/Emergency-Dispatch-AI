import React from 'react';
import './CommunityPage.css';

function CommunityPage() {
    return (
        <div className="community-page">
            <section className="introduction">
                <h1>Community Hub</h1>
                <p>Welcome to the Community Hub! Here you can engage with other dispatchers, participate in discussions, review calls, and join our volunteer network.</p>
            </section>

            <section className="discussion-forums">
                <h2>Discussion Forums</h2>
                <input type="text" className="search-bar" placeholder="Search discussions..." />
                <div className="filter-options">
                    <select className="dropdown">
                        <option value="general">General Discussion</option>
                        <option value="emergency">Emergency Response Tips</option>
                        <option value="training">Training Experiences</option>
                    </select>
                </div>
                <div className="forum-threads">
                    <div className="thread-item">
                        <p className="description">Discussion Thread Description</p>
                        <button className="join-button">Join Discussion</button>
                    </div>
                </div>
            </section>

            <section className="peer-review">
                <h2>Peer Review System</h2>
                <p>Our peer review system allows dispatchers to review and learn from each other's calls. View available reviews or submit your own.</p>
                <div className="review-list">
                    <div className="review-item">
                        <p className="summary">Call Review Summary</p>
                        <button className="view-button">View Review</button>
                    </div>
                </div>
                <button className="submit-review-button">Submit Review</button>
            </section>

            <section className="volunteer-network">
                <h2>Volunteer Network</h2>
                <p>Join our volunteer network and contribute to the community. Sign up to participate in volunteer opportunities.</p>
                <button className="sign-up-button">Sign Up</button>
                <div className="volunteer-opportunities">
                    <div className="opportunity-item">
                        <p className="description">Volunteer Opportunity Description</p>
                        <button className="join-now-button">Join Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CommunityPage;
