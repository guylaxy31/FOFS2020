const mongoose = require('mongoose');
const { Schema } = mongoose;
const SalesSchema = new Schema({
    sale_firstname: String,
    sale_lastname: String,
    sale_age: Number,
    sale_phone: String,
    sale_email: String,
    username: String,
    password: String,

});

module.exports = mongoose.model('Sales', SalesSchema);