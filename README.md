👁️ Auto-Bureaucrat: Surveillance Terminal
"Biological stagnation is not an error; it is a metric." > A high-performance, real-time MERN stack application containerized with Docker and evolved into a Progressive Web App (PWA). This system monitors systemic stagnation levels and manages the "nullification" of biological responses across a distributed network.

🛠️ The Tech Stack
Frontend (The Terminal)
Framework: React 18 with Vite (Lightning-fast HMR).

State Management: Real-time DOM mutations via WebSockets.

Styling: Matrix-inspired Terminal UI (CSS3).

Deployment: Vercel (Global Edge Network).

Backend (The Monolith)
Runtime: Node.js & Express.

Database: MongoDB Atlas (NoSQL cloud storage).

Communication: Socket.io (Bi-directional low-latency events).

Deployment: Render (Dockerized Web Service).

DevOps & Architecture
Containerization: Docker (Alpine Linux base image for minimal footprint).

Offline Evolution: PWA implementation via vite-plugin-pwa (Service Workers & Web Manifest).

CI/CD: Automated pipeline via GitHub integration.

🚀 Key Features
Real-Time Surveillance: Instantaneous host infection updates without page refreshes using Socket.io.

Dockerized Resilience: The entire backend is encapsulated in a Docker container, ensuring "it works on my machine" translates to "it works in the cloud."

PWA Ready: Installable on Desktop and Mobile. Works offline thanks to advanced Service Worker caching strategies.

RESTful API: Robust endpoints for host assimilation, mutation, and systemic tracking.

🏗️ System Architecture
Client (PWA): Interacts with the user, handles offline caching, and establishes a WebSocket handshake.

Server (Docker): Processes business logic and broadcasts state changes to all connected clients.

Database (Atlas): Persistent storage for the Global Infection Ledger.

🛠️ Local Development
Prerequisites
Docker Desktop

Node.js (v18+)

MongoDB Atlas URI

Installation
Clone the repository:

Bash
git clone https://github.com/ChamomileLOL/auto-bureaucrat-backend.git
Backend Setup:

Bash
npm install
# Create a .env file with your MONGO_URI
npm start
Frontend Setup:

Bash
cd surveillance-terminal
npm install
npm run dev
Docker Execution
To run the backend in a containerized environment:

Bash
docker build -t auto-bureaucrat-backend .
docker run -p 5050:5050 auto-bureaucrat-backend
🌐 Live Access
Live Terminal: https://auto-bureaucrat-frontend.vercel.app

API Backbone: https://auto-bureaucrat-backend.onrender.com

Developed for the Scaler Tech Electives Curriculum. Systemic Stagnation is Mandatory