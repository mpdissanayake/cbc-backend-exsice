import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    
    email:{
        type : String,
        required :true,
        unique :true

    },

    fristNmae :{
        type : String,
        required :true,
        
    },
    isBloked:{
        type :Boolean,
        default:false,
    },
    type :{
        type:String,
        default:"customer"

    },
    profilePicture:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonduck.com%2Ficons%2F69622%2Favatar&psig=AOvVaw1OMVEbjKcG7DcYxKJa_-5s&ust=1733308930138000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjevKK0i4oDFQAAAAAdAAAAABAE"


    }
})

const User =mongoose.model("users",userSchema)

export default User;