const http = require('http')
const port =  4000;
// const cors = require("cors")
const jsonobject=
[
  {  "What is Node Js":"js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language",
    },
]
const app = http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write('<html>')
        response.write('<body>')
        response.write('<h1>What is Node Js</h1>')
        response.write('<p>js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.</p>')
        response.write('</body>')
        response.write('</html>')
        response.end()
    }
  
    else if(request.url==="/fetchAPI" ){
        const data = JSON.stringify(jsonobject)
        response.write(data)
        response.end()
    }
});
// app.use(cors(
//      {
//         //  origin:["http://localhost:4000","http://localhost:4001"]
//         origin:"*"
//      }
//  ))
app.listen(port,()=>{
    console.log(`server is running in the port no. ${port}`);
})