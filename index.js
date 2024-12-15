import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";
import { createUser } from "./controllers/userController.js";
import userRouter from "./routes/userRouter.js";
import dotenv from "dotenv";
dotenv.config()

const app =express();

const mongoUrl=process.env.MONGO_DB_URI

app.use(express.json());// add this line to data save in data base//
app.use (bodyParser.json());

mongoose.connect(mongoUrl,{})

const connection =mongoose.connection;

connection.once("open",()=>{

  console.log("Database is conected");
})

app.use("/api/students",studentRouter);
app.use("/api/product", productRouter);
app.use ("/api/user/", userRouter );






app.listen(3000,()=>{
    console.log("Suver is running on port 3000")
  }  
)
