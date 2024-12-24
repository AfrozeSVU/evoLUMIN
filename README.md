AgroNexus 🌱
Project Overview
AgroNexus is a web platform designed to bridge the gap between farmers and consumers by enabling direct transactions, thus ensuring fair pricing for farmers and fresh produce for consumers. This platform also provides farmers with expert agricultural guidance, weather updates, access to modern tools, and a unique solution-sharing forum. AgroNexus aims to empower the farming community, enhance sustainable agriculture, and bring joy to farmers globally.





https://github.com/user-attachments/assets/b477ddfe-f70a-4552-8418-4f740ed8d47b



Technologies Used
Frontend: React.js, CSS, HTML
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
File Storage: Cloudinary (for image and video uploads)
Messaging: Twilio API (for SMS notifications)
Weather API: OpenWeather API (for daily weather updates)
Translation: Google Translate API (for multi-language support)
Data Analysis: Gemini API (for farming tools and recommendations)
Deployment: Vercel (Frontend), Heroku (Backend)
Project Description
Agriculture remains the backbone of many economies but faces challenges like middlemen exploitation, crop diseases, and limited access to advanced technology. AgroNexus addresses these by connecting farmers directly with consumers, providing an advisory network with agricultural scientists, and offering tools and resources to improve productivity and sustainability. Consumers benefit by accessing fresh, farm-direct products, while farmers gain a fair marketplace and reliable expert support.

 

Powers multi-language support.
Google Translate API Documentation
API Key Setup: Sign up for the Google Cloud Console, activate the Translate API, and generate an API key.
Cloudinary API

Handles image and video uploads for crop and yield pictures.
Cloudinary API Documentation
API Key Setup: Sign up at Cloudinary to get your API keys.
Twilio API

Sends SMS notifications to farmers for weather alerts and important updates.
Twilio API Documentation
API Key Setup: Sign up at Twilio and obtain an API key and phone number.
Gemini API

Used for providing access to modern farming tools and advice.
Gemini API Documentation
API Key Setup: Sign up at Gemini to obtain an API key.
Demo Video
AgroNexus Demo Video on YouTube:https://youtu.be/l_KwCjEBcVg

Installation and Setup
To set up AgroNexus locally, follow these steps:

Clone the Repository

bash
Copy code
git clone (https://github.com/swanith1234/evoLUMIN)
cd agro-nexus
Install Dependencies

Backend
bash
Copy code
cd backend
npm install
Frontend
bash
Copy code
cd frontend
npm install
Set Up Environment Variables

Create a .env file in both the backend and frontend directories.
Backend .env file should include:
plaintext
Copy code
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
WEATHER_API_KEY=your_openweather_api_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
GEMINI_API_KEY=your_gemini_api_key
Frontend .env file should include:
plaintext
Copy code
REACT_APP_WEATHER_API_KEY=your_openweather_api_key
REACT_APP_TRANSLATE_API_KEY=your_google_translate_api_key
Run the Backend Server

bash
Copy code
cd backend
npm start
Run the Frontend Server

bash
Copy code
cd frontend
npm start
Access the Application

Open your browser and go to http://localhost:3000 to see the application.
Deployment Link
Access the live application here: AgroNexus

Future Scope
Enhanced Image Recognition: Incorporate AI-based disease diagnosis by analyzing crop images.
Advanced Analytics: Provide farmers with data analytics on crop yield trends, weather patterns, and market prices.
Expanded Marketplace: Include support for organic certification and promote sustainable farming practices.
Mobile App: Develop a mobile version for better accessibility for farmers.
Community Support Forum: Add a forum for farmers to discuss issues and share insights.
