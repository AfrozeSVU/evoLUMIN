# AgroNexus 🌱


**Demo Video**

🌟 **Watch the AgroNexus Demo** 🌟  
Experience the full capabilities of AgroNexus through this engaging demo video:  
[**AgroNexus Demo Video**](https://drive.google.com/file/d/1rm7j75RjfAtnGoExsFaaqinnEcZM4Oqt/view?usp=sharing)  
Don't miss out—see how AgroNexus is transforming agriculture!

---

**Project Overview**

AgroNexus is an innovative web platform designed to bridge the gap between farmers and consumers by enabling direct transactions, ensuring fair pricing for farmers, and delivering fresh produce to consumers. The platform provides farmers with expert agricultural guidance, real-time weather updates, access to modern farming tools, and a collaborative space for sharing solutions. AgroNexus aims to empower the global farming community, promote sustainable agricultural practices, and create positive change in the agricultural industry.

---

**Technologies Used**

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **File Storage:** Cloudinary (for image and video uploads)
- **Messaging:** Twilio API (for SMS notifications)
- **Data Analysis:** Gemini API (for farming tools and recommendations)
- **Geolocation:** Geolocation API (for determining user's location)
- **Voice Navigation:** Web Speech API (for voice-based navigation)
- **Deployment:** Vercel (Frontend), Heroku (Backend)

---

**Project Description**

Agriculture is a vital component of many global economies but faces numerous challenges, including middlemen exploitation, crop diseases, and limited access to advanced technology. AgroNexus addresses these issues by directly connecting farmers to consumers, offering expert advice from agricultural scientists, and providing modern tools and resources to enhance productivity and sustainability. Consumers benefit from fresh, farm-direct products, while farmers enjoy a fair marketplace, enhanced profitability, and reliable expert support.


Why AgroNexus?
Our mission is clear: AGRO (farmers) + NEXUS (connection) = A hub for resources, knowledge, tools, and market access.

🌟 What AgroNexus Offers:
📌 Agro Connect:A bridge between farmers and experts, enabling real-time problem-solving and knowledge sharing. 
📌 Agro Market: Eliminates middlemen by directly connecting farmers with retailers for better pricing and profits. 
📌Digital Tools: Tutorials and guides to boost digital literacy, empowering farmers to utilize online tools. 
📌 Agro Tools:Affordable rentals of advanced farming equipment for small to mid-scale farmers. 
📌 Voice & Translation Support: A voice-assisted interface with translation capabilities ensures inclusivity for all, even those who are illiterate.
---

**API References**

1. **Cloudinary API**
   - Handles image and video uploads for crop and yield images.
   - [Cloudinary API Documentation](https://cloudinary.com/documentation)
   - **API Key Setup:** Register at Cloudinary to obtain API keys.

2. **Twilio API**
   - Sends SMS notifications to farmers for weather alerts, updates, and other important communications.
   - [Twilio API Documentation](https://www.twilio.com/docs)
   - **API Key Setup:** Register at Twilio to get your API keys and a phone number.

3. **Gemini API**
   - Provides farming tools and expert advice to improve agricultural practices.
   - [Gemini API Documentation](https://geminiapi.com/docs)
   - **API Key Setup:** Register at Gemini to obtain an API key.

4. **Geolocation API**
   - Used to determine the user's location and provide location-specific services.
   - **API Key Setup:** No API key is required; it works directly with browser geolocation features.

5. **Web Speech API (Voice Navigation)**
   - Enables voice-based navigation within the platform for ease of use, especially for farmers who may prefer hands-free operation.
   - [Web Speech API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
   - **Setup:** Works out-of-the-box in most modern browsers without needing external APIs.

---


**Installation and Setup**

To set up AgroNexus locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/swanith1234/evoLUMIN
cd agro-nexus
```

### 2. Install Dependencies

- **Backend:**

```bash
cd backend
npm install
```

- **Frontend:**

```bash
cd frontend
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in both the **backend** and **frontend** directories.

- **Backend .env File:**

```plaintext
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
GEMINI_API_KEY=your_gemini_api_key
```

- **Frontend .env File:**

```plaintext
REACT_APP_CLOUDINARY_API_KEY=your_cloudinary_api_key
REACT_APP_TWILIO_ACCOUNT_SID=your_twilio_account_sid
REACT_APP_TWILIO_AUTH_TOKEN=your_twilio_auth_token
REACT_APP_GEMINI_API_KEY=your_gemini_api_key
```

### 4. Run the Backend Server

```bash
cd backend
npm start
```

### 5. Run the Frontend Server

```bash
cd frontend
npm start
```

### 6. Access the Application

Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

---

**Future Scope**

- **Enhanced Image Recognition:** Leverage AI-based disease detection by analyzing crop images.
- **Advanced Analytics:** Provide farmers with data analytics on crop yield trends, weather patterns, and market prices.
- **Expanded Marketplace:** Support organic certification and promote sustainable farming practices.
- **Mobile Application:** Develop a mobile version to increase accessibility for farmers.
- **Community Support Forum:** Add a discussion forum where farmers can share insights, ask questions, and collaborate.

---

AgroNexus is more than just a platform—it's a movement toward smarter, connected agriculture. By empowering farmers with technology, we aim to drive positive change in the agriculture sector and ensure sustainable farming practices for future generations.

**Empowering farmers. Transforming agriculture. One connection at a time.**

---

