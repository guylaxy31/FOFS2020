const express = require('express');
const Sales = require('../models/Sales');
const router = express.Router();


router.post('/', (req, res) => {
    const sale = new Sales({
        sale_id: req.body.sale_id,
        sale_firstname: req.body.sale_firstname,
        sale_lastname: req.body.sale_lastname,
        sale_age: req.body.sale_age,
        sale_phone: req.body.sale_phone,
        sale_email: req.body.sale_email,
        create: req.body.create,
        restaurant_id: req.body.restaurant_id
    });
    sale.save().then(result => {
        res.send({
            massage: 'Sale created!',
            data: result
        }).catch(
            err => console.log(err)
        )
    })
});

module.exports = router;

