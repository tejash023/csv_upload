const express = require('express');
const app = express();
const port = process.env.PORT || '8080';
const db = require('./config/mongoose');


app.use('/', require('./routes'));

//starting the server
app.listen(port, function(err){
  if(err){console.log("Error in connecting with the server", err); return}
  console.log(`Sucessfully connected to the server at port ${port}`);
})