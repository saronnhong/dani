const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drawingSchema = new Schema({
    randName: { type: String, required: true },
    drawing: { type: String, required: true }
});

const Drawings = mongoose.model("Drawing", drawingSchema);

module.exports = Drawings;
