import React, { useState } from 'react';
import './ResourcesPage.css';

function ResourcesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const tutorials = [
        { type: 'video', description: 'CPR Training Video', src: 'https://www.youtube.com/embed/DUaxt8OlT3o?si=zgW-CPLT43c5aMIE' },
        { type: 'video', description: 'First Aid Training Video', src: 'https://www.youtube.com/embed/ea1RJUOiNfQ?si=U-W5legGLHyOs-Sg' },
        { type: 'article', description: 'First Aid Guide', src: 'https://www.webmd.com/first-aid/cardiopulmonary-resuscitation-cpr-treatment' },
        { type: 'video', description: 'How to Use an AED', src: 'https://www.youtube.com/embed/2VxVQ2expR0?si=S3xJ6Ed5PFv9KcpF' },
        { type: 'video', description: 'Connection to Computer for HeartCode', src: 'https://www.youtube.com/embed/VlznBJfNlO0?si=0XDo6-hMZ56dlcnb' },
        { type: 'pdf', description: 'Fire Safety Manual', src: 'https://www.usf.edu/administrative-services/environmental-health-safety/documents/firesafety-manual.pdf' },
        { type: 'pdf', description: 'Laerdal: Lifesaving Products', src: 'https://cdn.laerdal.com/downloads/f1910/ABTPVGOI/2009-Laerdal-Catalogue.pdf' },
        { type: 'pdf', description: 'American Red Cross: First Aid/CPR/AED Participants Manual', src: 'https://safetylibrary.typepad.com/files/First%20Aid%20CPR-AED%20student%20manual.pdf' },
        { type: 'pdf', description: 'WHO: Emergency Medical Teams Minimum Standards and Recommendations', src: 'https://extranet.who.int/emt/sites/default/files/BlueBook2021.pdf' },
        { type: 'pdf', description: 'UNICEF: Emergency Preparedness and Response Handbook', src: 'https://www.nutritioncluster.net/sites/nutritioncluster.com/files/2020-03/UNICEF%20Preparedness%20Guidance%20Note_29_Dec_%202016.pdf' },
        { type: 'pdf', description: 'American Heart Association: First Aid Guidelines', src: 'https://cpr.heart.org/-/media/CPR-Files/Course-Updates/2022-Updates/4_15_22-updates/2020_Hndbk_ChngNtc-2.pdf' }
    ];

    const filteredTutorials = tutorials.filter(tutorial =>
        (filter === 'all' || tutorial.type === filter) &&
        tutorial.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="resources-page">
            <section className="introduction">
                <h1 className="resources-introduction-heading">Emergency Resources</h1>
                <p>Discover essential emergency resources on our page, tailored for both the general public and dispatchers. Access comprehensive tutorials and guides to handle various emergencies with confidence. First Responders can quickly learn and perform emergency procedures by searching our extensive database. Stay prepared and informed with our expertly curated content.</p>
            </section>

            <section className="tutorials-guides">
                <h2>Tutorials and Guides</h2>
                <div className="search-filter-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search tutorials..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <div className="filter-options">
                        <select className="dropdown" value={filter} onChange={e => setFilter(e.target.value)}>
                            <option value="all">All</option>
                            <option value="video">Video</option>
                            <option value="article">Article</option>
                            <option value="pdf">Protocol PDF</option>
                        </select>
                    </div>
                </div>
                <div className="tutorial-links">
                    {filteredTutorials.map((tutorial, index) => (
                        <div key={index} className="tutorial-item">
                            <p className="description">{tutorial.description}</p>
                            {tutorial.type === 'video' ? (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={tutorial.src}
                                    title={tutorial.description}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <iframe
                                    title={tutorial.description}
                                    src={tutorial.src}
                                    width="100%"
                                    height="600px"
                                    frameBorder="0"
                                ></iframe>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ResourcesPage;
