const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(
            colors.blue(
              `Connected to Database Successfully at HOST : ${colors.yellow(mongoose.connection.host)}`
            )
          );
    } catch (error) {
        console.log(colors.bgRed.white(`Error in Database: ${error.message}`));
    }
}

module.exports = { dbConnection }