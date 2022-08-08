const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended:false })

app.set('view engine','ejs');
app.get("/",function(req,res){
    res.render("index");
})

app.post("/", urlencodedParser ,function(req,res){
var nname = req.body;
console.log(nname);
res.render("index");
});

app.get("/contact.ejs",function(req,res){

    res.render("contact");
})
app.get("/intro.ejs",function(req,res){
    res.render("intro");
})
app.get("/projects.ejs",function(req,res){
    res.render("projects");
})
app.get("/skills.ejs",function(req,res){
    res.render("skills");
})
app.get("/social.ejs",function(req,res){
    res.render("social");
})
app.use(express.static("public"));

app.listen(3000,function(){
    console.log("server started on a port 30000 successfully");

})