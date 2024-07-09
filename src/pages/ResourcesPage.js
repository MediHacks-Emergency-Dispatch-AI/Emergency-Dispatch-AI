import React from 'react';
import './ResourcesPage.css';

function ResourcesPage() {
  return (
    <div className="resources-page">
      <section className="introduction">
        <h1>Emergency Resources</h1>
        <p>This page provides access to various emergency protocols, tutorials, guides, and necessary documents to assist dispatchers in their duties.</p>
      </section>

      <section className="emergency-protocols">
        <h2>Emergency Protocols</h2>
        <input type="text" className="search-bar" placeholder="Search protocols..." />
        <div className="filter-options">
          <select className="dropdown">
            <option value="all">All</option>
            <option value="medical">Medical</option>
            <option value="fire">Fire</option>
            <option value="police">Police</option>
          </select>
        </div>
        <div className="protocol-links">
          <div className="protocol-item">
            <p className="description">Protocol Description</p>
            <div className="buttons">
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
          <!-- Repeat protocol-item as needed -->
        </div>
      </section>

      <section className="tutorials-guides">
        <h2>Tutorials and Guides</h2>
        <input type="text" className="search-bar" placeholder="Search tutorials..." />
        <div className="filter-options">
          <select className="dropdown">
            <option value="all">All</option>
            <option value="video">Video</option>
            <option value="article">Article</option>
            <option value="step-by-step">Step-by-Step Guide</option>
          </select>
        </div>
        <div className="tutorial-links">
          <div className="tutorial-item">
            <p className="description">Tutorial Description</p>
            <div className="buttons">
              <button>View</button>
            </div>
          </div>
          <!-- Repeat tutorial-item as needed -->
        </div>
      </section>

      <section className="documents-downloads">
        <h2>Documents and Downloads</h2>
        <input type="text" className="search-bar" placeholder="Search documents..." />
        <div className="filter-options">
          <select className="dropdown">
            <option value="all">All</option>
            <option value="forms">Forms</option>
            <option value="manuals">Manuals</option>
          </select>
        </div>
        <div className="document-links">
          <div className="document-item">
            <p className="description">Document Description</p>
            <div className="buttons">
              <button>Download</button>
            </div>
          </div>
          <!-- Repeat document-item as needed -->
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;
