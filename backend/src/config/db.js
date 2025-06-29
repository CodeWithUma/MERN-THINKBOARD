import mongoose from 'mongoose';

export const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI environment variable is not set");
    }
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1); // Exit the process with failure
    }
}