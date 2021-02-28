const mongoose = require('mongoose');
const { Schema } = mongoose;
var order = new Schema({
    orderdetails: [{ type: Schema.Types.ObjectId, ref: 'orderdetail' },],
    addr_line2: String,
    state: String,
    city: String,
    postal_code: String});

module.exports = mongoose.model('order', order);