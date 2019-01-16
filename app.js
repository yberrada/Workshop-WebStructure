'use strict';
var fs = require('fs');
var express=  require('express');
var bodyParser = require('body-parser');
var app= express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  res.render('index', {val: null,val2:null, error: null});
})
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {



})

app.listen(3000,()=>{
  console.log("output to port 3000");
})
