const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metricSchema = new Schema({
    profileVisits: Number
    
});

const Metrics = mongoose.model("Metric", metricSchema);

module.exports = Metrics;
