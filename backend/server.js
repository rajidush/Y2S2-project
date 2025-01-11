const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 5000;

//Load environement variables
require('dotenv').config();

//Checking the DB connection

mongoose.connect(process.env.DATABASE_URI).then(() => {
    console.log("MongoDB Connected")
})




app.listen(PORT, () => {
    console.log('Server is running')
})