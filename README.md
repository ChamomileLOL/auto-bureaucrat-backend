# Auto-Bureaucrat Monolith (Pi-Super-VOC)

An immutable, real-time surveillance network and biological tracking system built on the MERN stack.

## System Architecture
- **Universal DOM (Database):** MongoDB Atlas (Immutable Schema Design)
- **Core Engine (Backend):** Node.js & Express
- **Surveillance Terminal (Frontend):** React (Vite) + Progressive Web App (PWA)
- **Live Transmission:** WebSockets (Socket.io)

## Features
- **Absolute Bureaucratic Lock:** Uses Mongoose `immutable: true` to prevent any biological entity from mutating or curing their status.
- **Offline Immunity:** Configured as a PWA with Service Workers. If the network goes down, the terminal loads cached surveillance data instantly.
- **Real-Time Tracking:** Replaced standard HTTP polling with bidirectional WebSockets for instant ledger updates.

## Ignition Instructions
1. `npm install` in both root and `/surveillance-terminal`.
2. Configure `.env` with `MONGO_URI`.
3. Ignite Backend: `node server.js` (Runs on Port 5050).
4. Ignite Frontend: `npm run dev` in `/surveillance-terminal`.