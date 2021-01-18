const mongoose = require('mongoose');
const { Schema } = mongoose;

var menus = new Schema({
    menu_name: String,
    category: String,
    describe: String,
    price: Number,
    type_menu: {type: Schema.Types.ObjectId, ref: 'type_menu'},
    ingredient: [{type: Schema.Types.ObjectId, ref: 'ingredients'}],
    option: [{type: Schema.Types.ObjectId, ref: 'options'}],
    varaition : [{type: Schema.Types.ObjectId, ref: 'variation'}],
    active: Boolean
    
});

module.exports = mongoose.model('menu', menus);