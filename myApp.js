var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))


app.get("/name", (req,res,next) => { 
  let firstname = req.query.first;
  let lastname = req.query.last;
  res.json({ 
    name: `${firstname} ${lastname}`
  })
}, (req,res) => { 
  res.send({name})
})


app.get("/", (req, res) => { 
  res.sendFile(__dirname + "/views/index.html");
  app.use("/public", express.static(__dirname + "/public"));
})

app.post("/name", (req,res,next) => { 
  res.json({ 
    name: `${req.body.first} ${req.body.last}`
  })  
})


 module.exports = app;
