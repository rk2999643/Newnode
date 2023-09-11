const register = (req,res)=>{
    res.send("register")
}
const login = (req,res,next)=>{
    // res.send("login")
    const age = req.query.age;
    if(age>= 18){
         res.send([
            {name: "Ratan1"},
            {name: "Ratan2"},
            {name: "Ratan3"},
            {name: "Ratan4"},
            {name: "Ratan5"},
         ])
    }

}
const logout = (req,res)=>{
    res.send("logout")


}
module.exports={register,login,logout}