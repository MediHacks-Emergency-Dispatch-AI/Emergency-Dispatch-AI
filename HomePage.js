import React, { useEffect } from 'react';
import './HomePage.css';

function HomePage() {
    useEffect(() => {
        const canvas = document.getElementById('ecgCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = 500; // Adjust canvas height as needed
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const width = canvas.width;
        const height = canvas.height;
        const midHeight = height / 2;

        let xPos = 0;

        const ecgPattern = [
            { x: 0, y: 0 },
            { x: 50, y: 0 },     // longer straight line
            { x: 60, y: -30 },   // peak
            { x: 70, y: 30 },    // trough
            { x: 80, y: -20 },   // small peak
            { x: 90, y: 0 },     // return to baseline
            { x: 140, y: 0 },    // longer straight line
            { x: 150, y: -50 },  // deep trough
            { x: 160, y: 70 },   // tall peak
            { x: 170, y: 0 },    // return to baseline
            { x: 220, y: 0 },    // longer straight line
            { x: 230, y: -20 },  // small trough
            { x: 240, y: 30 },   // small peak
            { x: 250, y: 0 },    // return to baseline
            { x: 300, y: 0 },    // longer straight line
        ];

        const patternLength = ecgPattern[ecgPattern.length - 1].x;

        function drawECGLine() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(0, midHeight);

            let currentX = -xPos % patternLength;

            while (currentX < canvas.width) {
                for (let i = 0; i < ecgPattern.length; i++) {
                    const nextPoint = ecgPattern[i];
                    const y = midHeight + nextPoint.y;
                    const x = currentX + nextPoint.x;
                    ctx.lineTo(x, y);
                }
                currentX += patternLength;
            }

            ctx.strokeStyle = '#ff0000'; // red color
            ctx.lineWidth = 2;
            ctx.stroke();

            xPos += 1;

            requestAnimationFrame(drawECGLine);
        }

        drawECGLine();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div className="home-page">
            <header className="home-header">
                <canvas id="ecgCanvas"></canvas>
                <div className="custom-text">
                    <div className="home-large-text">We</div>
                    <div className="home-medium-text">Care. <span className="home-small-text">alot.</span></div>
                </div>
            </header>
            <section className="home-hero">
                <div className="home-hero-content">
                    <h1>Revolutionizing Emergency Response with AI</h1>
                    <p>Empowering dispatchers with real-time assistance, advanced training, and seamless integration.🤖 WE CARE AI : Empowering Dispatchers, Saving Disabled Individuals.❤️ Join us in this Journey of Saving Lives. </p>
                </div>
            </section>
            <section className="home-key-features">
                <h2>Why Choose Our System?</h2>
                <div className="home-features-grid">
                    <div className="home-feature">
                        <h3>Dynamic Protocol Updates</h3>
                        <p>Stay updated with the latest protocols.</p>
                    </div>
                    <div className="home-feature">
                        <h3>Emergency Assistance</h3>
                        <p>Text-to-speech and Speech-to-text for the Disabled.</p>
                    </div>
                    <div className="home-feature">
                        <h3>Resource Rich</h3>
                        <p>Essential emergency resources from Videos to Protocol Guides.</p>
                    </div>
                    <div className="home-feature">
                        <h3>Training Ai</h3>
                        <p>A Particular AI model Made to Generate Scenarios and teach Dispatcher .</p>
                    </div>
                    <div className="home-feature">
                        <h3> Integrated Community</h3>
                        <p> A Community Hub to connect Dispatchers and the General Public to share experience</p>
                    </div>
                    <div className="home-feature">
                        <h3>User Experience</h3>
                        <p>Enhanced user interface for efficiency.</p>
                    </div>
                </div>
            </section>
            <section className="home-meet-creators">
                <h2>Meet the Creators</h2>
                <div className="home-creators-grid">
                    <img src="/sam.png" alt="Creator 1" />
                    <img src="/sub.png" alt="Creator 2" />
                    <img src="/AVI.png" alt="Creator 3" />
                    <img src="/dep.png" alt="Creator 4" />
                </div>
            </section>
            <section className="home-how-it-works">
                <h2>How It Works</h2>
                <div className="home-steps">
                    <div className="home-step">
                        <h3>Step 1</h3>
                        <p>Register and set up your profile.</p>
                    </div>
                    <div className="home-step">
                        <h3>Step 2</h3>
                        <p>Access the training modules.</p>
                    </div>
                    <div className="home-step">
                        <h3>Step 3</h3>
                        <p>Get real-time assistance during dispatch.</p>
                    </div>
                    <div className="home-step">
                        <h3>Step 4</h3>
                        <p>Review your performance and get certified.</p>
                    </div>
                </div>
            </section>
            <section className="home-vision-beyond">
                <h2>The Vision Beyond</h2>
                <p>Our Project has the potential to revolutionize emergency
                    response services, reducing response times and improving
                    outcomes. Future developments include expanding the AI’s
                    capabilities, integrating with more emergency systems,
                    enhancing training modules, and continuously updating
                    protocols to reflect the latest best practices. The goal is to
                    create a comprehensive, adaptable, and resilient emergency
                    dispatch system that can serve communities worldwide.</p>
            </section>
            <section className="home-call-to-action">
                <h2>Ready to Revolutionize Your Dispatch?</h2>
                <button>Get Started Today</button>
            </section>
        </div>
    );
}

export default HomePage;
