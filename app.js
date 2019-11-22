const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("hello world");
})


app.get("/react",function(req,res){
    res.send("hello in react JS world");
})


const port =  process.env.PORT || process.env.npm_package_config_port || 3000;
console.log('process.env.npm_package_config_port')
console.log(port)
app.listen(port);