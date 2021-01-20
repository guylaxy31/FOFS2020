const mongoose = require('mongoose');
const { Schema } = mongoose;
var variation = new Schema({
    variation_name: String,
    variation_namr: Number});

module.exports = mongoose.model('variation', variation);