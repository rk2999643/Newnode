const express = require("express");
const route = require("./router/ProductRouting");
const productroute = require("./router/ProductRouting");
const app = express();
const port = 7000;
const validate = require("./middleware/userMiddleware.")
const middleware = (req,res,next)=>{
    console.log("Application level middleware is Running");
    res.send("ttttt")
}

app.use(middleware)
app.use("/user",validate,route)
app.use("/product",productroute)

app.listen(port,()=>{
    try{
        console.log(`Server is running on the port no. ${port}`);
    }
    catch(err){
          console.log(`Error ${err}`);
    }
})