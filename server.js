// server.js - The Consolidated Core Engine (WebSocket Upgraded)

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); // NEW: Core Node module needed for WebSockets
const { Server } = require('socket.io'); // NEW: The WebSocket Library
require('dotenv').config();

const PiPayload = require('./models/PiPayload');

const app = express();
app.use(cors());
app.use(express.json());

// NEW: Wrap the Express app in an HTTP Server
const server = http.createServer(app); 

// NEW: Initialize the Socket Server and allow the React frontend to connect
const io = new Server(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST", "PUT"]
    }
});

// NEW: Monitor live connections to the Surveillance Terminal
io.on('connection', (socket) => {
    console.log(`[UNIVERSAL DOM] Live terminal connected. Socket ID: ${socket.id}`);
});

// ==========================================
// DIRECT TRANSMISSION VECTORS
// ==========================================

// The Injection Vector
app.post('/api/pi/infect', async (req, res) => {
    try {
        const { hostIdentifier, systemicStagnationLevel } = req.body;
        const newInfection = new PiPayload({ hostIdentifier, systemicStagnationLevel });
        const savedInfection = await newInfection.save();
        
        // NEW: The exact millisecond the database saves, broadcast it to the React frontend!
        io.emit('newAssimilatedHost', savedInfection);

        res.status(201).json({ message: "Deployed successfully.", data: savedInfection });
    } catch (error) {
        res.status(400).json({ message: "Deployment Failed.", error: error.message });
    }
});

// The Surveillance Vector
app.get('/api/pi/hosts', async (req, res) => {
    try {
        const hosts = await PiPayload.find({});
        res.status(200).json({ data: hosts });
    } catch (error) {
        res.status(500).json({ message: "SYSTEM ERROR", error: error.message });
    }
});

// The Mutation Attempt Vector (PUT)
app.put('/api/pi/mutate/:id', async (req, res) => {
    try {
        const hostId = req.params.id;
        const { requestedMutation } = req.body;
        const hostRecord = await PiPayload.findById(hostId);
        
        if (!hostRecord) return res.status(404).json({ message: "Host not found." });

        hostRecord.variantType = requestedMutation;
        await hostRecord.save();
        res.status(200).json({ message: "Mutation successful. The system has healed." });
    } catch (error) {
        res.status(403).json({ message: "MUTATION REJECTED." });
    }
});

// ==========================================
// ENGINE IGNITION 
// ==========================================
// ... existing code ...

// ==========================================
// ENGINE IGNITION - ABSOLUTE OVERRIDE
// ==========================================
const PORT = 5050; // Hardcoded to prevent .env interference
const URI = process.env.MONGO_URI;

mongoose.connect(URI)
    .then(() => {
        console.log("SUCCESS: Connected to MongoDB Atlas.");
        server.listen(PORT, () => {
            console.log(`Auto-Bureaucrat Monolith running on SECURE PORT: ${PORT}`);
        });
    })
    .catch((error) => console.error("CRITICAL FAILURE:", error));