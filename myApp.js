var express = require('express');
var app = express();
require('dotenv').config();


console.log('Hello World')

app.use(function(req,res,next) { 
  console.log(req.method + " "  + req.path + " - " + req.ip);
  next();
})

app.get("/", (req, res) => { 
  res.sendFile(__dirname + "/views/index.html");
  app.use("/public", express.static(__dirname + "/public"));
})

app.get("/json", (req,res) => {
  let message = "Hello json";
    if(process.env.MESSAGE_STYLE == "uppercase") { 
      message = message.toUpperCase();
    }
  res.send({"message": message});
})

 module.exports = app;
