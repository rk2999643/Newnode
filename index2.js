// const abc=(a,b)=>{
//     let c=a+b
//     return c
// }
// const xyz=(a,b)=>{
//     let c=a+b
//     return c
// }
// const qur=(a,b)=>{
//     let c=a+b
//     return c
// }
// const defaultfunction=()=>{
//     let name = "Ratan"
//     return name
// }
// module.exports= defaultfunction

// module.exports={abc,xyz,qur}

const express = require("express")
const dummydata = require("./dummydata")
const route = require("./router/userrouter");
const productrouting = require("./router/ProductRouting");
const validate = require("./middleware/userMiddleware.")
const app = express();
const arr = []
app.use(express.json())
app.get('/Aboutus',(req,res)=>{
    res.send("post API")
})
app.get('/Contactus',(req,res)=>{
    res.send("contact API")
})
app.get('/post',(req,res)=>{
    res.send("post API")
})
app.post("/login",(req,res)=>{
    // res.send("it is a login form")
    const data = req.body
    console.log(data);
    arr.push(data)
    res.send(arr)

})
app.use("/user",route)
app.use("/productroute",productrouting)
app.use(validate)

app.listen(5000,()=>{
    console.log("Server is running Fine");
})