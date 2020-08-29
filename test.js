const express = require("express");
const app = express();

app.get("/" , function(request,response)
{
    response.send('Hello Server comes into use!!');
})

app.get("/contact" , function(req,res){
    res.send("Contact me at <b>somaygarg182@gmail.com</b>");
})

app.get("/about", function(req,res){
    res.send("I am Somay Garg.Now I am working on Nodejs.<br><b>THANK U!!</b>")
})



app.listen(3000,function(){
    console.log("Server has started!!")
}
);