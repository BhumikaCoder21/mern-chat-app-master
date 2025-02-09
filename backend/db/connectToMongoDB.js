// db/connectToMongoDB.js
const connectToMongoDB = async () => {
  try {
    const MONGO_DB_URI = process.env.MONGO_DB_URI;
    
    if (!MONGO_DB_URI) {
      throw new Error("MongoDB URI is missing in environment variables");
    }
    
    await mongoose.connect(MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process on DB connection failure
  }
};
