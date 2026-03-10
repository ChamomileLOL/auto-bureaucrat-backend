// controllers/piController.js - The Execution Logic

const PiPayload = require('../models/PiPayload');

const deployPiVariant = async (req, res) => {
    try {
        const { hostIdentifier, systemicStagnationLevel } = req.body;
        const newInfection = new PiPayload({ hostIdentifier, systemicStagnationLevel });
        const savedInfection = await newInfection.save();
        res.status(201).json({ message: "Deployed", data: savedInfection });
    } catch (error) {
        res.status(400).json({ message: "Failed", error: error.message });
    }
};

const getInfectedHosts = async (req, res) => {
    try {
        console.log("Surveillance camera triggered by GET request.");
        const hosts = await PiPayload.find({});
        res.status(200).json({
            message: "SURVEILLANCE ACTIVE: Retrieving all assimilated hosts.",
            totalAssimilated: hosts.length,
            data: hosts
        });
    } catch (error) {
        res.status(500).json({ message: "SYSTEM ERROR", error: error.message });
    }
};

module.exports = { deployPiVariant, getInfectedHosts };