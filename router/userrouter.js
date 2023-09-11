const route = require('express').Router()
const {register,login,logout}=require("../controller/userController")
const validate = require('../middleware/userMiddleware.')


// route.get("/api/login",(req,res)=>{
//     res.send("This is our login page");
// })
// route.get("/api/signup",(req,res)=>{
//     res.send("This is our signup page");
// })
// route.get("/api/logout",(req,res)=>{
//     res.send("This is our logout page");
// })
route.get("/api/login",validate,login)
route.get("/api/register",register)
route.get("/api/logout",logout)
module.exports= route;