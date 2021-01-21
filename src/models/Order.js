const mongoose = require('mongoose');
const { Schema } = mongoose;
var order = new Schema({
    addr_line1: String,
    addr_line2: String,
    state: String,
    city: String,
    postal_code: String});

module.exports = mongoose.model('order', order);