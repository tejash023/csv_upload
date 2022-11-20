const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

//acquiring DB conncetion
const db = mongoose.connection;

//chceking if there is error connceting
db.on('error', console.error.bind('error in connecting to the db'));

//success connection
db.once('open', function(){
  console.log('Successfully connected to the DB');
})