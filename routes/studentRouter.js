import express from "express";

import { getStudent,createStudent,deleteStudent } from "../controllers/studentControllers.js";

const studentRouter=express.Router();//create studentRouter//

studentRouter.get("/", getStudent)
 
studentRouter.post("/", createStudent)

studentRouter.delete("/", deleteStudent)



export default studentRouter;