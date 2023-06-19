const csvtojson = require("csvtojson");
const fs = require("fs");

// Controller for converting seats CSV to JSON
const seatConverterController = (req, res) => {
  try {
    const csvFilePath = "./data/raw_data/seats.csv";
    const jsonFilePath = "./data/json_data/seats.json";

    csvtojson()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        fs.writeFile(jsonFilePath, JSON.stringify(jsonObj, null, 4), (err) => {
          if (err) {
            console.error("Error writing JSON file:", err);
            return res.status(500).json({ error: "Internal Server Error" });
          } else {
            // Conversion successful
            return res.status(200).json("CSV to JSON conversion complete!");
          }
        });
      })
      .catch((err) => {
        console.error("Error converting CSV to JSON:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {
    console.log(colors.bgRed.white(`Error in Controllers: ${error.message}`));
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller for converting seat pricing CSV to JSON
const seatPricingConverterController = (req, res) => {
  try {
    const csvFilePath = "./data/raw_data/seatPricing.csv";
    const jsonFilePath = "./data/json_data/seatPricing.json";

    csvtojson()
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        fs.writeFile(jsonFilePath, JSON.stringify(jsonObj, null, 4), (err) => {
          if (err) {
            console.error("Error writing JSON file:", err);
            return res.status(500).json({ error: "Internal Server Error" });
          } else {
            // Conversion successful
            return res.status(200).json("CSV to JSON conversion complete!");
          }
        });
      })
      .catch((err) => {
        console.error("Error converting CSV to JSON:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {
    console.log(colors.bgRed.white(`Error in Controllers: ${error.message}`));
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  seatConverterController,
  seatPricingConverterController,
};