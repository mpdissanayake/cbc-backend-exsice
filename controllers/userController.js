import User from "../models/user.js";
import bcrypt from"bcrypt"

export function createUser(req,res){


    const newUserData=req.body
    newUserData.password=bcrypt.hashSync(newUserData.password,10)

console.log(newUserData)
    

   const user =new User(newUserData)

    user.save()
   .then(()=>{
      res.json({
           message:" user Created success"
       })
  }).catch(()=>{
      res.json({

       message:"Creation Failed"
     })
  })
}

export function loginUser(req,res){
    User.find({email : req.body.email}).then((users)=>{
       if(users.lenth==0){
        res.json({
            message :"User not Foumd"
        })
       }else{
        const isPasswordCorrect = bcrypt.compareSync
        (req.body.password,user.password)

        if(isPasswordCorrect){
            res.json({
                message : "USer Log in"
            })
        }else{
            res.json({
                message : "User Not Loggin in (wroong password"
            })
        }
       }
        
    })
}