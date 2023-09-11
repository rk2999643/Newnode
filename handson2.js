const express = require('express')

const app = express()
const port = 6000

app.get("/",(req,res)=>{
    res.send("This is my second Handson")
})
app.get("/api/main",(req,res)=>{
    res.send({
        "What is Express":"Express is provides Extra Fetaure "
    })
})


app.listen(port,()=>{
    try{
        console.log(`server is running on the port no.${port}`);
    }
    catch(err){
        console.log(`Erroe ${err}`);
    }
})