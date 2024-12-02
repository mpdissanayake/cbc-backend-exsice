import Student from "../models/student.js";


//create student router unction//
studentRouter.get("/",(req,res)=>{
    (studentList)=>{
        res.json({
            list : studentList
        })
    }
})

studentRouter.post("/",(req,res)=>{

    const student=new Student(req.body)
    student.save().then(()=>{
        res.json({
            message : "Student Created "
        })
    }).catch(()=>{
        res.json({
            message : " Student is no created"
        })
    })
})
export default studentRouter;
