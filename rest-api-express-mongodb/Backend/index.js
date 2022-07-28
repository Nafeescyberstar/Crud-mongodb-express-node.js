require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
bodyParser = require('body-parser');
const path = require('path');
let cors = require("cors");



const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected Successfully');
})

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('', routes);
app.listen(4000, () => {
    console.log(`server started at ${4000}`)
})