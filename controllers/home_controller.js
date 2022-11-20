const CSVFile = require('../models/mongoose');
const fs = require('fs');
const path = require('path');
const papa = require('papaparse');


//render homepage
module.exports.homePage = async (req, res) => {
  let files = await CSVFile.find({});
  res.render('home',{
    title: 'CSV Upload | Home',
    files: files
  });
 
}

//create and parse CSV
module.exports.uploadFile = (req, res) => {

  CSVFile.uploadedCSV(req, res, async function(err){
    try{

      let csvFile = await CSVFile.findOne({name:req.file.originalname});
      if(csvFile){
        console.log('csv already exists');
        return res.redirect('back');
      }


      const CSVFileUP = req.file.path;
      const csvData = fs.readFileSync(CSVFileUP, 'utf8');

      const conversedFile = papa.parse(csvData, { 
        header: false 
      
      });

      //console.log(conversedFile);

      if(req.file && req.file.mimetype == 'text/csv'){
        let csvFile = CSVFile.create({
          name: req.file.originalname,
          file: conversedFile.data
        });

        return res.redirect('back');
      }


    }catch(err){
      console.log("error", err);
      return res.render('servererror');
      
      
    }
  })
}

//display CSV Data
module.exports.displayCSV = async (req, res) => {
  let displayData = await CSVFile.findById(req.params.id);
  return res.render('table',{
    title: 'CSV Upload | Details',
    file: displayData.name,
    keys: displayData.file[0],
    results: displayData.file
  })
};

//delete CSV from DB
module.exports.deleteCSV = async (req, res) => {
  let deleteCSV = await CSVFile.findByIdAndDelete(req.params.id);
  return res.redirect('back');
}