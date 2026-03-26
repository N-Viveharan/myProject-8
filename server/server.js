import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// App Config
const PORT = process.env.PORT || 5001;
const app = express();

// Initialize Middlewares
app.use(express.json());
app.use(cors());






// ✅ MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

// Call DB connection
connectDB();

// API routes
app.get('/', (req, res) => res.send("API Working"));

// Start server
app.listen(PORT, () => console.log("Server Running on port " + PORT));