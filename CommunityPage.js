import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CommunityPage.css';

function CommunityPage() {
    const [showDiscussionForm, setShowDiscussionForm] = useState(false);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [reviewSummary, setReviewSummary] = useState('');
    const [reviewContent, setReviewContent] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [discussions, setDiscussions] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [userDiscussion, setUserDiscussion] = useState(null);

    useEffect(() => {
        fetchDiscussions();
        fetchReviews();
    }, []);

    const fetchDiscussions = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/discussions');
            setDiscussions(response.data);
        } catch (error) {
            console.error('Error fetching discussions:', error);
        }
    };

    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/reviews');
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const handleStartDiscussion = () => {
        setShowDiscussionForm(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/discussions/create', { title, description });
            console.log('Discussion created:', response.data);
            setShowDiscussionForm(false);
            setTitle('');
            setDescription('');
            fetchDiscussions();
            setUserDiscussion(response.data);
        } catch (error) {
            console.error('Error creating discussion:', error);
        }
    };

    const handleStartReview = () => {
        setShowReviewForm(true);
    };

    const handleReviewFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/reviews/create', { summary: reviewSummary, content: reviewContent });
            console.log('Review created:', response.data);
            setShowReviewForm(false);
            setReviewSummary('');
            setReviewContent('');
            fetchReviews();
        } catch (error) {
            console.error('Error creating review:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/discussions?search=${searchQuery}`);
            setDiscussions(response.data);
        } catch (error) {
            console.error('Error searching discussions:', error);
        }
    };

    return (
        <div className="community-page">
            <section className="introduction">
                <div className="community-hub-header">
                    <h1>Community Hub</h1>
                </div>
                <p>Welcome to the Community Hub! Your Hub for Engaging Discussions and Essential Emergency Preparedness! we believe in the power of community-driven dialogue and the importance of being prepared for emergencies. Our platform is designed to facilitate meaningful discussions, provide valuable insights, and promote safety within the community. Initiate Forums- Create your own discussion forums on topics that matter. Engage with Community- Join existing forums to contribute your ideas, ask questions, and interact with fellow community members. Share your experiences and learn from others in a respectful and supportive environment.  </p>
                <button className="start-discussion-button" onClick={handleStartDiscussion}>Start Discussion</button>
            </section>

            {showDiscussionForm && (
                <section className="discussion-form">
                    <h2>Create New Discussion</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            )}

            {userDiscussion && (
                <section className="user-discussion">
                    <h2>Your Discussion</h2>
                    <p>Title: {userDiscussion.title}</p>
                    <p>Description: {userDiscussion.description}</p>
                </section>
            )}

            <section className="discussion-forums">
                <h2>Discussion Forums</h2>
                <div className="search-container">
                    <input type="text" className="search-bar" placeholder="Search discussions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className="search-button" onClick={handleSearch}>Search</button>
                </div>
                <div className="filter-options">
                    <select className="dropdown">
                        <option value="general">General Discussion</option>
                        <option value="emergency">Emergency Response Tips</option>
                        <option value="training">Training Experiences</option>
                    </select>
                </div>
                <div className="discussion-titles">
                    {discussions.map(discussion => (
                        <div key={discussion._id} className="discussion-title-item">
                            <p>{discussion.title}</p>
                        </div>
                    ))}
                </div>
                <div className="forum-threads">
                    {discussions.map(discussion => (
                        <div key={discussion._id} className="thread-item">
                            <p className="description">{discussion.title}</p>
                            <button className="join-button">Join Discussion</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="peer-review">
                <h2>Peer Review System</h2>
                <p className="peer-review-text">Our peer review system allows dispatchers to review and learn from each other's calls. View available reviews or submit your own.</p>
                <div className="review-summaries">
                    {reviews.map(review => (
                        <div key={review._id} className="review-summary-item">
                            <p>{review.summary}</p>
                        </div>
                    ))}
                </div>
                <div className="review-list">
                    {reviews.map(review => (
                        <div key={review._id} className="review-item">
                            <p className="summary">{review.summary}</p>
                            <button className="view-button">View Review</button>
                        </div>
                    ))}
                </div>
                <button className="submit-review-button" onClick={handleStartReview}>Submit Review</button>
            </section>

            {showReviewForm && (
                <section className="review-form">
                    <h2>Submit New Review</h2>
                    <form onSubmit={handleReviewFormSubmit}>
                        <input type="text" placeholder="Summary" value={reviewSummary} onChange={(e) => setReviewSummary(e.target.value)} required />
                        <textarea placeholder="Content" value={reviewContent} onChange={(e) => setReviewContent(e.target.value)} required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            )}

            <section className="volunteer-network">
                <h2>Volunteer Network</h2>
                <p className="volunteer-network-text">Join our volunteer network and contribute to the community. Sign up to participate in volunteer opportunities.</p>
                <button className="sign-up-button">Sign Up</button>

                <section className="container">
                    <div className="slider-wrapper">
                        <div className="slider">
                            <img id="slide-1" src="/1.png" alt="Image 1" />
                            <img id="slide-2" src="/2.png" alt="Image 2" />
                            <img id="slide-3" src="/3.png" alt="Image 3" />
                            <img id="slide-4" src="/4.png" alt="Image 4" />
                            <img id="slide-5" src="/5.png" alt="Image 5" />
                        </div>
                        <div className="slider-nav">
                            <a href="#slide-1"></a>
                            <a href="#slide-2"></a>
                            <a href="#slide-3"></a>
                            <a href="#slide-4"></a>
                            <a href="#slide-5"></a>
                        </div>
                    </div>
                </section>

                <div className="volunteer-opportunities">
                    <div className="opportunity-item">
                        <div className="volunteer-description">
                            <p className="description">Volunteer Opportunity to save the community</p>
                        </div>
                        <button className="join-now-button">Join Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CommunityPage;
