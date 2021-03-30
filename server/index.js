const express = require('express');
const mongoose = require('mongoose');
const Sales = require('../src/routes/sales.js');
const Restaurants = require('../src/routes/restaurant.js');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Sales Home');
});

app.use('/api/sales', Sales);
app.use('/api/restaurant', Restaurants);
require('dotenv').config();
const port = process.env.PORT || 3000;
// app.get('/', (req,res) =>{
//     res.send('Welcome to express!!');
// });

// app.get('/api/listen' , (req,res) =>{
//     res.send([{id: 1 , roomType: 'Duplex'}, {id:2 , roomType: 'Sing'}])
// });

mongoose.connect('mongodb+srv://petpusin:Ov9mc1mbCwOPolPQ@cluster.40z2p.mongodb.net/<dbname>?retryWrites=true&w=majority' , { useNewUrlParser: true , useUnifiedTopology: true}).then(
    resule =>{
        app.listen(port,() => console.log(`Server is runing on port ${port}`))
    }
).catch(err => console.log(err));


