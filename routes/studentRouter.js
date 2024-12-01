import express from "express";
import Student from "../models/student.js";

const studentRouter=express.Router();//create studentRouter//

studentRouter.get("/",(req,res)=>{
    console.log("This is get request from student router")
    res.json({
        message:"this is get request for student router"
    })
})

studentRouter.post("/",(req,res)=>{
    console.log("This is post request from student router")
    res.json({
        message:"this is post request from student Router"
    })

})



export default studentRouter;