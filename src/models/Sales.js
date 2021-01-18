const mongoose = require('mongoose');
const { Schema } = mongoose;
const SalesSchema = new Schema({
    sale_id: mongoose.Schema.Types.ObjectId,
    sale_firstname: String,
    sale_lastname: String,
    sale_age: Number,
    sale_phone: String,
    sale_email: String,
    create: { type: Date, default: Date.now },
    address: { type : Object

    },
    'address.addr_line1': String,
    'address.addr_line2': String,
    'address.state': String,
    'address.city': String,
    'address.postal_code': String,
    open_status: String,
    restaurant_id: String,

});

module.exports = mongoose.model('Sales', SalesSchema);