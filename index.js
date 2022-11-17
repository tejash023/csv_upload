const express = require('express');
const app = express();
const port = process.env.PORT || '8080';
const db = require('./config/mongoose');

//middleware to use assets
app.use(express.static('./assets'));
app.use(express.urlencoded());


//setting view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//router
app.use('/', require('./routes'));

//starting the server
app.listen(port, function(err){
  if(err){console.log("Error in connecting with the server", err); return}
  console.log(`Sucessfully connected to the server at port ${port}`);
})