import express from "express";
import mongoose from "mongoose";
// MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
import dotenv from "dotenv";

const app = express();
// dotenv.config() reads the .env file and loads its variables into process.env, making them available throughout your application.
// Without calling .config(), the variables in .env won't be accessible.
dotenv.config();

mongoose.set("strictPopulate", true); // i just did but i was not getting error like my tutor
const PORT = process.env.PORT || 8800;

// Ideally, the database connection should be established before starting the server
//  to ensure the app doesn't start if the database connection fails.
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connceted To MongoDB");
  } catch (error) {
    //   handleError(error);
    console.log(error);
  }
};

app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
