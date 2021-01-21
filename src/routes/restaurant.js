const express = require('express');
const restaurant = require('../models/Restaurant');
const addresses = require('../models/Address');
const menu = require('../models/Menu');
const ingredients = require('../models/Ingredient');
const type_menus = require('../models/Type_menu');
const options = require('../models/Option');
const varaitions = require('../models/varaiation');
const Menu = require('../models/Menu');
const router = express.Router();


router.post('/', async (req, res) => {
    
    try {
        console.log(req.body);
    const {
        restaurant_name,
        address,
        open_status,
        describe,
       

    } = req.body;
    const addr = await addresses.create({
        addr_line1: address.addr_line1,
        addr_line2: address.addr_line2,
        state: address.state,
        city: address.city,
        postal_code: address.postal_code
    }); //address/id
    const restaurants = await restaurant.create({
        restaurant_name: restaurant_name,
        address: [addr._id],
        open_status,
        describe: describe,
        sale_id: null
    });
    res.send({
        massage: 'restaurant created!',
        data: restaurants
    });
    } catch (error) {
        console.log(error);
    }
});

router.post('/menu', async (req, res) => {
    console.log(req.body);
    const {
        _id,
        list,
        type_menu,
        ingredient,
        option,
        varaition
    } = req.body
    const type = await type_menus.insertMany(
        list.type_menu
    );
    console.log(type);
    const ingre = await ingredients.insertMany(
        list.ingredient);
    console.log(ingre);
    const op = await options.insertMany(
        list.option

    );
    const vara = await varaitions.insertMany(
        list.varaition

    );
    var list_type = [];
    var list_in = [];
    var list_op = [];
    var list_va = [];

    type.map(each => { list_type.push(each._id) });
    ingre.map(each => { list_in.push(each._id) });
    op.map(each => { list_op.push(each._id) });
    vara.map(each => { list_va.push(each._id) });


    const menus = await menu.create({
        menu_name: list.menu_name,
        category: list.category,
        describe: list.describe,
        price: list.price,
        type_menu: list_type,
        ingredient: list_in,
        option: list_op,
        varaition: list_va,
        active: false
    });
    console.log(menus);
    await restaurant.findByIdAndUpdate({ _id }, { $push: { menus: menus._id } })
    res.send({
        massege: 'menu created!',
        data: menus
    }).catch(
        err => console.log(err)
    );
    // res.end();
})

router.get("/", (req, res) => {
    restaurant.
        find().populate('menus').
        // populate('address').
        exec().then((doc) => {
            console.log(doc);
            res.send(doc);
        })
});

router.get("/:_id", (req, res) => {
    console.log(req.params._id);
    restaurant.findOne({ _id: req.params._id }).populate('menus').exec((err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
        console.log(data.menus);
        
    });
});

module.exports = router;

