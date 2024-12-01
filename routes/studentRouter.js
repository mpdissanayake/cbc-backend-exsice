import express from "express";
import Student from "../models/student.js";

const studentRouter=express.Router();//create studentRouter//

studentRouter.get("/",(req,res)=>{
    
})

studentRouter.post("/",(req,res)=>{

    const student=new Student(req.body)

    student.save().then(()=>{
        res.json({
            message:"Student Created"
        })
        
    }).catch(()=>{
        res.json({
            message : "Student Not Created"
        })
    })

})



export default studentRouter;