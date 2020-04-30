const express = require("express");

var app = express();

app.use( express.json() );
app.use(express.static('public'));

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/checkout', { useNewUrlParser: true } ,function(err,db){
    if(err) throw err;
    console.log(`database checkout was created`);
});

mongoose.connection.once("open",()=>{
    console.log("the connection was made")
  }).on("error",(error)=>{
    console.log("failed to connect to database")
  })
  
var checks = require('./routes/Checks.js')  
app.use('/checks', checks) 

var port = process.env.PORT || 3000

app.listen(port, function() {
    console.log(`listening on port ${port}`);
  });