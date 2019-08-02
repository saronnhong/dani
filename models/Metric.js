const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metricSchema = new Schema({
    profileVisits: {
        type: Number,
        default: 0
    }
    
});

const Metrics = mongoose.model("Metric", metricSchema);

module.exports = Metrics;
