const mongoose = require('mongoose');
const dotenv= require("dotenv");
dotenv.config();

const DB_URL = process.env.DB_URL;

const connectToDatabase= async  () => {

  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to the database successfully")
  }
   catch (error) {
    console.error(`Error connecting to DB ${error}`)
  }
 console.log("DB_URL:", DB_URL);

}

module.exports = connectToDatabase;
