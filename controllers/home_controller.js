const CSVFile = require('../models/mongoose');
const fs = require('fs');
const path = require('path');
const parse = require('papaparse');

module.exports.homePage = (req, res) => {
  res.render('home');
 
}

module.exports.uploadCSV = (req, res) => {
  try{
      
    //let user = await User.findById(req.params.id);
    CSVFile.uploadedCSV(req, res, function(err){
      if(err){console.log('********** Multer Error')};

      console.log(req.file);

      if(req.file){

        //fs.unlinkSync(path.join(__dirname, '..', CSVFile.csvPath + '/' + req.file.filename));
        //this is for saving the path of the uploaded file 
        //user.csv = User.csvPath + '/' + req.file.filename;
      }
      
      return res.redirect('back');
    })
  }catch{

  }
}