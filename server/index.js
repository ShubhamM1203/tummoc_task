
const express = require("express");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const User = require("./Model/usermodel")
const bcrypt = require("bcryptjs")

const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())

const connect=()=>{
    return mongoose.connect("mongodb+srv://roshan:roshan17@cluster0.eo5xkup.mongodb.net/?retryWrites=true&w=majority")
}

app.post("/api/signup",async(req,res)=>{
    try{

        const newPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:newPassword

        })
        console.log(user)
        res.json({status:"ok"}) 
    }
    catch(e){
      console.log(e.message)
    }
})


app.post("/api/login",async(req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email,
            
        })

        if(!user){
            return res.json({status:"error",error:"Invalid Login"})
        }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
        
        if(isPasswordValid){
            const token = jwt.sign({email:user.email},"secret123")
            console.log(token)
            return res.json({status:"ok",user:token})
        }

        else{
            return res.json({status:"error",user:false})

        }
    }
    catch(e){
      console.log(e.message)
    }
})

app.listen(8080, async()=>{
    try{
        await connect()
    console.log("Listining On ports")
    }
    catch(e){
      console.log(e.message)
    }
})
