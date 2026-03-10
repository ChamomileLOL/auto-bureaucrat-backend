// models/PiPayload.js - The Immutable DNA of the Pi Super VOC

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// We define the strict geometry of the infection. 
// Any data that does not perfectly match this structure will be rejected by the database.
const piPayloadSchema = new Schema({
    hostIdentifier: {
        type: String,
        required: true,
        unique: true // Each host is tracked individually within the centralized ledger
    },
    variantType: {
        type: String,
        default: "Pi-Super-VOC",
        immutable: true // This is the crucial line. Unlike Omicron, MongoDB will physically block this value from EVER mutating.
    },
    systemicStagnationLevel: {
        type: Number,
        required: true,
        min: 100 // The bureaucracy starts at maximum density
    },
    isBiological: {
        type: Boolean,
        default: false // The biological feedback loop is permanently set to false
    },
    bureaucraticLoopActive: {
        type: Boolean,
        default: true // The infinite while loop is active by default
    }
}, {
    timestamps: true // Automatically stamps the exact, unalterable geometric time of infection (createdAt, updatedAt)
});

// We compile this Schema into a Model. 
// The Model is the active worker bee that enforces these rules on the database.
module.exports = mongoose.model('PiPayload', piPayloadSchema);