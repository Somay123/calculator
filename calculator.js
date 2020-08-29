const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/calculator.html");
});

app.post("/", function(req,res){
    var a = req.body.num1;
    var b = req.body.num2;
    var result = a + b;

    const data = {
        members: [
            {
            email_address: a,
            status: b,
            
        }
        ]}

    res.send( data);
    console.log(req.body);
})

app.listen(8080,function(){
    console.log("Server Strated");
});
