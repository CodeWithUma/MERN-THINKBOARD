import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

// Connect to the database
// This function will connect to the MongoDB database using Mongoose.
connectDB();

app.use(express.json());
// Whenever we want to use a specific route, we can use the app.use method
// and specify the base path for that route.
app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
