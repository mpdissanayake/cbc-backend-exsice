import Student from "../models/student.js";


//create student router unction//
export function getStudent(req,res){
    Student.find({})
    .then((studentList)=>{
        res.json({
            list:studentList
        })
    })
}
// create create student function//

export function createStudent (req,res){

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
}
export function deleteStudent(req,res){
    Student.deleteOne({name:req.body.name})
    .then(()=>{
            res.json(
                {
                    message: "Student deleted successfully"
                })
        })
        .catch(()=>{
            message: "Error Deleting student",
            error;
            
        })

}
