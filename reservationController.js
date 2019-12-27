const express= require("express");

const bodyParser=require("body-parser");



const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){

    var date=req.body.date;
    var name=req.body.name;
    var time=req.body.time;
    var email=req.body.email;
    var numGuest=req.body.numG;
    var phone=req.body.phone;
    var area=req.body.area;


   

    res.send("The result of the calculation is ");


});
   






app.listen(3000,function(){
    console.log("Server started on port 3000");

});
