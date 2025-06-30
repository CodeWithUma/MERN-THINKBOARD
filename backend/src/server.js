import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

// Middleware to parse JSON bodies
// This middleware will parse incoming requests with JSON payloads.
app.use(express.json());    // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// Whenever we want to use a specific route, we can use the app.use method
// and specify the base path for that route.
app.use('/api/notes', notesRoutes);


// For Production Grade Applications this syntax is used to first connect to the database and then start the server.
// This ensures that the server only starts after a successful connection to the database.
// -----------------------------------------------------------------------------------------------------------------
// Connect to the database
// This function will connect to the MongoDB database using Mongoose.
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Exit the process with failure
  });


