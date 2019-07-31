const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coloringSchema = new Schema({
    randName: { type: String, required: true },
    coloring: { type: String, required: true }
});

const Colorings = mongoose.model("Coloring", coloringSchema);

module.exports = Colorings;
