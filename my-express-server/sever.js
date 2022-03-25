//jshint esversion:6
const express = require("express");
const app = express();
app.get("/",function(reqt,res){
    res.send("hello");
});
app.listen(3000, function(){
    console.log("server started at port 3000");
});