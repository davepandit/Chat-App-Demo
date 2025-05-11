// connection to the database
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.DB_CONNECTION_STRING
    );
    console.log(`MongoDB connected at ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error connecting to the database:", error);
    process.exit(1);
  }
};
