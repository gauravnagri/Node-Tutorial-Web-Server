const express = require("express");
const hbs = require("hbs");

var app = express();

app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("getCurrentYear",() => {
    return new Date().getFullYear();
})

app.use(express.static(__dirname + "/public"));

app.use((req,res,next) => {
   var now = new Date().toString();
   var log = `${now}:${req.method} : ${req.path}`;
   console.log(log);
   //next();
});

app.get("/",(req,res) => {
   res.render("home.hbs", {
       pageTitle : "Home"
   })
});

app.get("/about",(req,res) => {
    res.render("about.hbs",{
        pageTitle : "About"
    });
});

app.get("/bad",(req,res) => {
    res.send({
       errorMessage : "There was something bad about the request"
    });
});

app.listen(3000);