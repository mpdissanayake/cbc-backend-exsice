import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";

const app =express();
const mongoUrl="mongodb+srv://admin:123@cluster0.pka0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(express.json());// add this line to data save in data base//

mongoose.connect(mongoUrl,{})

const connection =mongoose.connection;

connection.once("open",()=>{

  console.log("Database is conected");
})

app.use("/api/students",studentRouter);
app.use("/api/product", productRouter);

app.use (bodyParser.json())

app.listen(3000,()=>{
    console.log("Suver is running on port 3000")
  }  
)
