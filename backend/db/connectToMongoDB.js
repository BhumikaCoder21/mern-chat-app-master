import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    if (!process.env.MONGO_DB_URI) {
      throw new Error(
        "MONGO_DB_URI is not defined in the environment variables"
      );
    }

    await mongoose.connect(
      process.env.MONGO_DB_URI,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
