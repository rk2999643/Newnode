// const validate = (req,res,next)=>{
//     const age = req.query.age;
//     if(age>=18){
//         next();
//     }else{
//         res.send({msg:"user not allowed"})
//     }
// };
// module.exports = validate;

// Error handling middleware

const validate = (err,req,res,next)=>{
    // const age = req.query.age;
    // try{
    //     if(age>=18){
    //         next();
    //     }else{
    //         res.send({msg:"user not allowed"})
    //     }
    // }
    // catch{
    //     console.log(err);
    // }
    console.log("Specific middleware is running");
    next();
};
module.exports = validate;