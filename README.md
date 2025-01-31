# Imaginee - Image Generator AI

<img width="928" alt="image" src="https://github.com/user-attachments/assets/feee1548-08a8-4499-8b16-47830e06b36e" />


## Overview
Imaginee is an AI-powered image generation web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to generate images using AI models and provides a seamless user experience.

## Features
- AI-based image generation
- User authentication (JWT-based login/signup)
- CRUD operations for managing generated images
- Responsive UI built with React and Tailwind CSS
- RESTful API with Express.js and MongoDB
- State management using Redux (if applicable)
- Deployment-ready configuration

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **State Management:** Redux (if used)
- **AI Model:** OpenAI/DALL·E or similar model

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/aranya-jana/Imaginee-Image-Generator-AI.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Imaginee-Image-Generator-AI
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

## Running the Project
1. Start the backend server:
   ```sh
   cd server
   npm run server
   ```
2. Start the frontend application:
   ```sh
   cd client
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser to use Imaginee.

## Environment Variables
Create a `.env` file in the server directory and configure the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIPDROP_API = your_API_key
RAZORPAY_KEY_ID= rzp_test_id
RAZORPAY_KEY_SECRET= Your_RazorPay_Secret_Key
```

