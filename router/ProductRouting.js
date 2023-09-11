const productrouting = require('express').Router()

productrouting.get("/api/in",(req,res)=>{
    res.send("This is our poin page");
})

productrouting.get("/api/out/:age",(req,res)=>{
    // res.send("This is our poout page");
    const age = req.params.age;
    if(age>=18){
        res.send("user is allowed");

    }
    else{
        res.send("user is not allowed")
    }
})
productrouting.get("/api/create",(req,res)=>{
    // res.send("This is our poup page");
    const {age,name,role} =req.query;
    res.send(age,name,role)
})
module.exports= productrouting;