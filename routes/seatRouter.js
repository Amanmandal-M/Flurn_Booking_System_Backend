const express = require('express');
const seatRouter = express.Router();

// Get Route
seatRouter.get('/seat', getSeatController);

// Get Route by Id
seatRouter.get('/seat/:id', getSeatController);


module.exports = { 
    seatRouter
}