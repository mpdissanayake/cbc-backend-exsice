import User from "../models/user.js";

export function createUser(req,res){

    const user =new User(req.body)

    user.save()
    .then(()=>{
        res.jeson({
            message:" user Created success"
        })
    }).catch(()=>{
        res.jeson({
            message:"Creation Failed"
        })
    })
}