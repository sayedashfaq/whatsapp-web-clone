import mongoose from "mongoose";
import { config as configDotenv } from "dotenv";

configDotenv();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.rwrhbam.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting to the database", error);
  }
};

export default Connection;
