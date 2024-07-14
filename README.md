# Emergency Dispatch AI

## Project Structure

```plaintext
emergency-dispatch-ai/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Header.js
│ │ ├── Header.css
│ │ ├── Footer.js
│ │ ├── Footer.css
│ │ └── NavigationBar.js
│ │ └── NavigationBar.css
│ ├── pages/
│ │ ├── HomePage.js
│ │ ├── HomePage.css
│ │ ├── ConversationalAIPage.js
│ │ ├── ConversationalAIPage.css
│ │ ├── TrainingPage.js
│ │ ├── TrainingPage.css
│ │ ├── ResourcesPage.js
│ │ ├── ResourcesPage.css
│ │ ├── CommunityPage.js
│ │ ├── CommunityPage.css
│ │ ├── EmergencyAssistancePage.js
│ │ ├── EmergencyAssistancePage.css
│ │ ├── LoginSignupPage.js
│ │ ├── LoginSignupPage.css
│ ├── App.js
│ ├── index.js
│ └── ...
├── backend/
│ ├── models/
│ │ ├── Discussion.js
│ │ ├── Review.js
│ │ ├── Volunteer.js
│ │ ├── User.js
│ │ ├── Volunteer.js
│ ├── middleware/
│ ├── auth.js
│ ├── ML/
│ │ ├── App.py
│ │ ├── Label_encoders.joblib
│ │ ├── scaler.joblib
│ │ ├── trained_model.joblib
│ ├── routes/
│ │ ├── discussions.js
│ │ ├── reviews.js
│ │ ├── volunteers.js
│ │ ├── emergency.js
│ │ ├── auth.js
│ ├── server.py
│ ├── server.js
│ ├── deepspeech-0.9.3-models.pbmm
│ ├── deepspeech-0.9.3-models.scorer
│ ├── requirements.txt
│ └── fine_tuned_model/
│ ├── config.json
│ ├── generation_config.json
│ ├── merges.txt
│ ├── model.safetensors
│ ├── special_tokens_map.json
│ ├── tokenizer_config.json
│ ├── vocab.json
├── package.json
└── README.md
```
# Project Description

Our mission was clear: to develop an AI-driven platform that could assist emergency dispatchers in providing timely and effective help, particularly to disabled individuals. This wasn't just a project; it was a heartfelt endeavor aimed at making a real difference in people's lives.

## Description of Each Page

### 1. `public/index.html`
- **Description**: The main entry point of the application where the root HTML structure is defined.
- **Language**: HTML

### 2. `src/components`
- **Header.js**: The header component that includes the site logo and navigation bar.
  - **Language**: JavaScript
  - **Framework**: React
- **Header.css**: Styling for the header component.
  - **Language**: CSS
- **Footer.js**: The footer component that includes links to privacy policy, terms of service, and contact us.
  - **Language**: JavaScript
  - **Framework**: React
- **Footer.css**: Styling for the footer component.
  - **Language**: CSS
- **NavigationBar.js**: The navigation bar component for site-wide navigation.
  - **Language**: JavaScript
  - **Framework**: React
- **NavigationBar.css**: Styling for the navigation bar component.
  - **Language**: CSS

### 3. `src/pages`
- **HomePage.js**: The home page of the application, which includes an ECG animation, hero section, key features, creators, and call to action.
  - **Language**: JavaScript
  - **Framework**: React
- **HomePage.css**: Styling for the home page.
  - **Language**: CSS
- **ConversationalAIPage.js**: The Conversational AI page that showcases the AI model's capabilities with a live demo.
  - **Language**: JavaScript
  - **Framework**: React
- **ConversationalAIPage.css**: Styling for the Conversational AI page.
  - **Language**: CSS
- **TrainingPage.js**: The training page for dispatchers to practice emergency scenarios.
  - **Language**: JavaScript
  - **Framework**: React
- **TrainingPage.css**: Styling for the training page.
  - **Language**: CSS
- **ResourcesPage.js**: The resources page providing various emergency training materials and guides.
  - **Language**: JavaScript
  - **Framework**: React
- **ResourcesPage.css**: Styling for the resources page.
  - **Language**: CSS
- **CommunityPage.js**: The community page for discussions, reviews, and volunteer opportunities.
  - **Language**: JavaScript
  - **Framework**: React
- **CommunityPage.css**: Styling for the community page.
  - **Language**: CSS
- **EmergencyAssistancePage.js**: The emergency assistance page providing tools for text and speech-based emergency reporting.
  - **Language**: JavaScript
  - **Framework**: React
- **EmergencyAssistancePage.css**: Styling for the emergency assistance page.
  - **Language**: CSS
- **LoginSignupPage.js**: The login and signup page for user authentication.
  - **Language**: JavaScript
  - **Framework**: React
- **LoginSignupPage.css**: Styling for the login and signup page.
  - **Language**: CSS

### 4. `src`
- **App.js**: The main App component that serves as the root component for the React application.
  - **Language**: JavaScript
  - **Framework**: React
- **index.js**: The entry point for the React application, rendering the App component.
  - **Language**: JavaScript
  - **Framework**: React

### 5. `backend`
- **models**: Contains data models for discussions, reviews, volunteers, and users.
  - **Language**: JavaScript (Node.js)
- **middleware**: Contains middleware functions for the backend.
  - **Language**: JavaScript (Node.js)
- **auth.js**: Handles authentication-related logic.
  - **Language**: JavaScript (Node.js)
- **ML**: Contains machine learning-related files including the main Python application and model files.
  - **Language**: Python
- **routes**: Contains route handlers for different API endpoints such as discussions, reviews, volunteers, emergency, and auth.
  - **Language**: JavaScript (Node.js)
- **server.py**: Python server for handling machine learning-related requests.
  - **Language**: Python
- **server.js**: Node.js server for handling general API requests.
  - **Language**: JavaScript (Node.js)
- **requirements.txt**: Lists the Python dependencies for the project.
  - **Language**: Text

### 6. `package.json`
- **Description**: Contains the metadata and dependencies for the Node.js project.
- **Language**: JSON

### 7. `README.md`
- **Description**: Provides an overview and documentation of the project.
- **Language**: Markdown

## Percentage of Coding Languages Used
The percentage of coding languages used can be estimated based on the number of files written in each language:

- **JavaScript (React and Node.js)**: 60%
- **CSS**: 25%
- **Python**: 10%
- **HTML**: 2%
- **JSON**: 1%
- **Markdown**: 2%

These percentages are approximate and based on the number of files and their significance in the project. 

