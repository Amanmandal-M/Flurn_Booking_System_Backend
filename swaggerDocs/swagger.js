// ----------------------------->>>>>>> Schemas <<<<<<<----------------------------------

// --------------------->>> Seats Schema <<<---------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     Seat:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID of the data.
 *         id:
 *           type: string
 *           description: ID of the seat.
 *         seat_identifier:
 *           type: string
 *           description: Seat identifier.
 *         seat_class:
 *           type: string
 *           description: Class of the seat.
 *         is_booked:
 *           type: boolean
 *           description: Indicates whether the seat is booked or not.
 *       example:
 *         _id: 64969cef022ba5b5e7a61143
 *         id: "1"
 *         seat_identifier: "654059941-2"
 *         seat_class: "H"
 *         is_booked: false
 */

// --------------------->>> Seats Pricing Schema <<<---------------------
/**
 * @swagger
 * components:
 *   schemas:
 *     SeatPricing:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID of the data.
 *         id:
 *           type: string
 *           description: ID of the seat.
 *         seat_class:
 *           type: string
 *           description: Class of the seat.
 *         min_price:
 *           type: string
 *           description: Minimum price of the seat.
 *         normal_price:
 *           type: string
 *           description: Normal price of the seat.
 *         max_price:
 *           type: string
 *           description: Maximum price of the seat.
 *       example:
 *         _id: 64969f30599ac4b50a8e1a51
 *         id: "1"
 *         seat_class: "A"
 *         min_price: "$*"
 *         normal_price: "$*"
 *         max_price: "$*"
 */


// ----------------------------->>>>>>> Routes <<<<<<<-----------------------------------

// ------------------------>>> Seat Routes <<<------------------------
// Tags
/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seat API Endpoints
 */

// GET all seats
/**
 * @swagger
 * /seats:
 *   get:
 *     summary: Returns a list of all seats.
 *     tags: [Seat]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Seat'
 *       500:
 *         description: Internal Server Error
 */

// GET a seat by ID
/**
 * @swagger
 * /seats/{id}:
 *   get:
 *     summary: Get a seat by ID.
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the seat to retrieve.
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Seat'
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Internal Server Error
 */

// POST a new seat
/**
 * @swagger
 * /seats:
 *   post:
 *     summary: Add a new seat.
 *     tags: [Seat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Seat'
 *     responses:
 *       201:
 *         description: Successful operation
 *       500:
 *         description: Internal Server Error
 */

// POST a new seat pricing
/**
 * @swagger
 * /seatPricing:
 *   post:
 *     summary: Add a new seat pricing.
 *     tags: [Seat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SeatPricing'
 *     responses:
 *       201:
 *         description: Successful operation
 *       500:
 *         description: Internal Server Error
 */

// DELETE a seat by ID
/**
 * @swagger
 * /seats/{id}:
 *   delete:
 *     summary: Delete a seat by ID.
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the seat to delete.
 *     responses:
 *       202:
 *         description: Seat deleted successfully
 *       500:
 *         description: Internal Server Error
 */

// DELETE a seat pricing by ID
/**
 * @swagger
 * /seatPricing/{id}:
 *   delete:
 *     summary: Delete a seat pricing by ID.
 *     tags: [Seat]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the seat pricing to delete.
 *     responses:
 *       202:
 *         description: Seat pricing deleted successfully
 *       500:
 *         description: Internal Server Error
 */

// ------------------------>>> Booking Routes <<<------------------------

// Tags
/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking API Endpoints
 */

// GET all bookings
/**
 * @swagger
 * /bookings:
 *   get:
 *     summary: Get all bookings.
 *     tags: [Booking]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Booking'
 *       500:
 *         description: Internal Server Error
 */

// POST a new booking
/**
 * @swagger
 * /booking:
 *   post:
 *     summary: Create a new booking.
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewBooking'
 *     responses:
 *       201:
 *         description: Successful operation
 *       500:
 *         description: Internal Server Error
 */