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

    const studentSchema=mongoose.Schema({
      name:String,
      age:Number,
      gender:String
    })

    const Student = mongoose.model("Student",studentSchema)

    const newStudent =new Student(req.body)
    newStudent.save().then(
()=>{

    res.json({
      messege:"Student"
    })
}

    ).catch(
      (error)=>{
        res.json({
          message:"Error"
        })
      }

    )
  })

app.listen(3000,()=>{
    console.log("Suver is running on port 3000")
  }  
)