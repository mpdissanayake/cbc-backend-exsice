import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app =express();
const mongoUrl="mongodb+srv://admin:123@cluster0.pka0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



mongoose.connect(mongoUrl,{})

const connection =mongoose.connection;

connection.once("open",()=>{

  console.log("Database is conected");
})

app.use (bodyParser.json())

app.get("/",
  (req,res)=>{

    console.log()

    console.log(req.body)
    console.log("This is get reqest");
  })

app.post("/",
  (req,res)=>{

    console.log(req.body)
    console.log("This is post reqest")

    res.json(
      {
        message:"Helow Good Morning " + req.body.name
      }
    )
  })

app.listen(3000,()=>{
    console.log("Suver is running on port 3000")
  }  
)