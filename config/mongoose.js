const mongoose = require('mongoose');

mongoose.connect('process.env.DB_URL');

const db = mongoose.connection;

db.on('error', console.error.bind('error in connecting to the db'));

db.once('open', function(){
  console.log('Successfully connected to the DB');
})