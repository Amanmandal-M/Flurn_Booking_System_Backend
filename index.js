const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();

const { dbConnection } = require("./configs/db");
const { convertCSVtoJsonRouter } = require("./routes/dataConverterRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Default route
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h1 style="text-align:center;color:blue">Welcome to Flurn Booking Service Backend</h1>`
    );
});

// API routes
app.use("/api", convertCSVtoJsonRouter);




// Server Listening Here
const PORT = process.env.PORT || 7070;

app.listen(PORT, async () => {
  try {
    console.log(
      colors.blue(`Server is listening on PORT : ${colors.yellow(`${PORT}`)}`)
    );
    await dbConnection();
  } catch (error) {
    console.log(
      colors.bgRed.white(`Error in starting the server: ${error.message}`)
    );
    process.exit(1);
  }
});
