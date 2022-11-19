const mongoose = require('mongoose');

//defining Schema for CSV data storage
const csvSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  file:{
    type: Array
  }
},{
  timestamps: true
});

const CSVFile = mongoose.model('CSVFile', csvSchema)
module.exports =  CSVFile;