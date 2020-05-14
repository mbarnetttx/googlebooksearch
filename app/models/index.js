// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const googlebooks = new Schema({
	title: { type: String, required: true },
    authors: { type: String, required: true },
    description: {type: String, required: true},
    image: {type: String, required: true}, 
    link: {type: String, required: true}
});

//Setting schema to variable
const Item = mongoose.model("Item", googlebooks);

//Exporting
module.exports = {Item: Item};
