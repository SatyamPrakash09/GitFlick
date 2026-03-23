import { configDotenv } from "dotenv";
configDotenv({
    path:".env"
})
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(()=>{
    const PORT = process.env.PORT
    app.listen(PORT,()=>{
        console.log(`\nApp is listening on http://localhost:${PORT}`)
    })
})
.catch((err)=>{
    console.error("Mongo DB connection failed!!!!: ", err)
})