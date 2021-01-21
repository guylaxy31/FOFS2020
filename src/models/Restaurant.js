const mongoose = require('mongoose');

const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    restaurant_name: String,
    address: { type: Schema.Types.ObjectId, ref: 'address' },
    open_status: { type: Boolean, default: false },
    menus: [{ type: Schema.Types.ObjectId, ref: 'menu' , default: null}],

},{ timestamps: true });


const Restaurant =  mongoose.model('restaurant', RestaurantSchema);
module.exports = Restaurant;