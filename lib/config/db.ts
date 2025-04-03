import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect("mongodb+srv://osanbantawarai:Blog3090@cluster0.tpvdm.mongodb.net/blog")
    console.log("Database Connected")
}