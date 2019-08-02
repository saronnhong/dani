const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metricSchema = new Schema({
    profile: {
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
    }
    
});

const Metrics = mongoose.model("Metric", metricSchema);

module.exports = Metrics;
