// const http = require("http")
// const port=3000

// http.createServer((request,response)=>{
//      response.write("hello how are you!!")
//      response.end()
// }).listen(port,()=>{
//     console.log(`server is running in the port no. ${port}`);
// })

const http = require("http")
const port=3000

const app= http.createServer((request,response)=>{
     if(request.url=="/home"){
        response.write("<html>")
        response.write("<body>")
        response.write("<h1>Home Page</h1>")
        response.write("<p>here you can find the details of Home Page</p>")


        response.write("</body>")

        response.write("</html>")
        response.end()
     }
     else if(request.url==='/post'){
        response.write("post api")
        response.end()
     }
     else{
        response.write("about Page")
        response.write("I am fine")
        response.end()



     }
})
app.listen(port,()=>{
    console.log(`server is running in the port no. ${port}`);
})