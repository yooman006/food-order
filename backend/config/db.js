import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://barath:652003@cluster0.0k0pr36.mongodb.net/food-del').then (()=>console.log("Db connected"));
}