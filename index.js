const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const colors = require("colors");
require("dotenv").config();

const { dbConnection } = require("./configs/db");

const { convertCSVtoJsonRouter } = require("./routes/dataConverterRoute");
const { seatRouter } = require("./routes/seatRouter");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// --------------->>>>>>>> Swagger <<<<<<<<-------------------
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Black Coffer Backend Assignment",
      version: "1.0.0",
      description: "This is a Blackcoffer company assignment .",
    },
    servers: [
      {
        url: "http://localhost:8080/api",
      },
    ],
  },
  apis: ["./swaggerDocs/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Default route
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h1 style="text-align:center;color:blue">Welcome to Flurn Booking Service Backend</h1>`
    );
});

// API routes
app.use("/convert", convertCSVtoJsonRouter);
app.use("/api", seatRouter);




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
