const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metricSchema = new Schema({
    Home: {
        type: Number,
        default: 0
    },
    Profile: {
        type: Number,
        default: 0
    },
    Look: {
        type: Number,
        default: 0
    },
    Listen: {
        type: Number,
        default: 0
    },
    Learn: {
        type: Number,
        default: 0
    },
    Images: {
        type: Number,
        default: 0
    },
    Videos: {
        type: Number,
        default: 0
    },
    "Images-360": {
        type: Number,
        default: 0
    },
    "Animal-Sounds": {
        type: Number,
        default: 0
    },
    "Nature-Sounds": {
        type: Number,
        default: 0
    },
    "Relaxing-Sounds": {
        type: Number,
        default: 0
    },
    Spelling: {
        type: Number,
        default: 0
    },
    Coloring: {
        type: Number,
        default: 0
    },
    Drawing: {
        type: Number,
        default: 0
    }
    
});

const Metrics = mongoose.model("Metric", metricSchema);

module.exports = Metrics;
