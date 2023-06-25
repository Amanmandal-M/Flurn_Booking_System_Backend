# Booking Service Backend

## About

<br>

This is Flurn Company Assignment this is for booking seats.

<br>

## Clone Repository

```
git clone https://github.com/Amanmandal-M/Flurn_Booking_System_Backend.git
```

## Installation

```
npm i -g nodemon
npm install / npm i
```

## Start the Backend server

```
node index.js

nodemon index.js
```

Note : You can use any of them

<br>

## MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └──  seatsModel.js
|    └──  seatsPricingModel.js
├── routes
|    └── seatRouter.js
|    └── bookingRouter.js
├──controllers
|    └── dataConverterController.js
|    └── seatController.js
```

Note:

- Before doing anything first create `.env` file and put `PORT` , `MONGO_URI`
- `PORT` is for listening the server.
- `MONGO_URI` is for running database and store your data in database so put your mongo link.

<br>

## Swagger API documentation

<strong>
<h2>
<a href="https://localhost:8080/api-docs" target="_blank">Swagger</a>
</h2>
</strong>

<br>

## Backend Deployment Link

<strong>
<h2>
<a href="https://localhost:8080/" target="_blank">Railway</a>
</h2>
</strong>

<br>

## Schema Design

<br>

<h3><strong>Seats Schema</strong><h3>

```js
{
    _id: ObjectId,
    id: {
        type: String,
        required: true
    },
    seat_identifier: {
        type: String,
        required: true
    },
    seat_class: {
        type: String,
        required: true
    },
    is_booked : {
        type: Boolean,
        required: false
    }
}
```

<br>

<h3><strong>Seats Pricing Schema</strong><h3>

```js
{
    _id: ObjectId,
    id: {
        type: String,
        required: true,
    },
    seat_class: {
        type: String,
        required: true,
    },
    min_price: {
        type: String,
        default: null,
    },
    normal_price: {
        type: String,
        required: true,
    },
    max_price: {
        type: String,
        default: null
    },
}
```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/api/seats</td>
            <td>This endpoint should allow users for retrieving all seats data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/seats/:id</td>
            <td>This endpoint should allow users to for retrieving a single seats by ID.</td>
            <td>200</td>
        </tr>       
        <tr>
            <td>POST</td>
            <td>/api/seats</td>
            <td>This endpoint is for for adding new seat data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/seatPricing</td>
            <td>This endpoint is for for adding new seat pricing data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/seats/:id</td>
            <td>This endpoint is for deleting seats data by ID.</td>
            <td>202</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/seatPricing/:id</td>
            <td>This endpoint is for deleting seats Pricing data by ID.</td>
            <td>202</td>
        </tr>
    </tbody>
</table>