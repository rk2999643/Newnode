const route = require('express').Router()

route.get("/api/login",(req,res)=>{
    res.send("This is our login page");
})
route.get("/api/signup",(req,res)=>{
    res.send("This is our signup page");
})
route.get("/api/logout",(req,res)=>{
    res.send("This is our logout page");
})
module.exports= route;