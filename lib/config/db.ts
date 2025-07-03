import mongoose from "mongoose";

// Track connection status to avoid multiple connection attempts
let isConnected = false;

export const ConnectDB = async () => {
    // If already connected, return early
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        // Connection options for better reliability
        const options = {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        };

        await mongoose.connect("mongodb+srv://osanbantawarai:Blog3090@cluster0.tpvdm.mongodb.net/blog", options);
        
        isConnected = true;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
        // Reset the connection flag as connection failed
        isConnected = false;
        throw new Error("Failed to connect to database");
    }
}