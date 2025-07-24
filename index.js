const express = require("express");
const app=express()
const port=3000;

app.get("/" , (req, res)=>{
    res.json({
        msg:"backend is working"
    })
})
app.get("/cron-job",(req,res)=>{
    res.json({
        msg:"cron job is working",
        date:new Date()
    })
})

app.listen(port, ()=>{
    console.log("app is runing at port no 3000")
})