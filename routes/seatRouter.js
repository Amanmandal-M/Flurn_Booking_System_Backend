const express = require('express');
const seatRouter = express.Router();

// Get Route
seatRouter.get('/seat', getSeatController);
seatRouter.get('/seat/:id', getSeatController);


module.exports = { 
    seatRouter
}