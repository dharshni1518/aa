const express = require('express')
const app = express()
app.use(express.json())
const PORT = 5000

let user =[
    {email:"alice@example.com", password:"alice123"},
    {email:"bob@example.com",password:"bob123"},
    {email:"charlie@example.com",password:"charlie123"}
]

app.put("/updateUser",(req,res)=>{
    const {email,password}=req.body
    const user = user.find((user)=>user.email===email)
    if(email){
        const user =password
        res.json({message:"Updated password"})
    }else{
        res.status(404).json({message:"email not found"})
    }
})

app.delete("/deleteUser/:id",(req,res)=>{
    const {id}=req.body
    const index = user.findIndex((user)=>user.email===email)
    if(index !== -1){
        user.splice=(index,1)
        res.json({message:"user deleted successfully"})
    }else{
        res.status(404).json({message:"email not found"})
    }
})

app.listen((PORT)=>console.log(`server is running in http://localhost:${5000}`))
