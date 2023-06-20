const express = require('express');
const seatRouter = express.Router();


seatRouter.get('/seat', getSeatController);
seatRouter.get('/seat/:id', getSeatController);





module.exports = { 
    seatRouter
}