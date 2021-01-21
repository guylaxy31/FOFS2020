const mongoose = require('mongoose');
const { number } = require('yup/lib/locale');
const { Schema } = mongoose;
var ingredients = new Schema({
    ingredient_name: String,
    ingredient_price: Number});

module.exports = mongoose.model('ingredients', ingredients);