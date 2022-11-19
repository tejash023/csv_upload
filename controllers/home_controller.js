const CSVFile = require('../models/mongoose');
const fs = require('fs');
const path = require('path');
const papa = require('papaparse');

module.exports.homePage = (req, res) => {
  res.render('home',{
    title: 'CSV Upload | Home'
  });
 
}

// module.exports.uploadCSV = (req, res) => {
//   try{
      
    
//     CSVFile.uploadedCSV(req, res, function(err){
//       if(err){console.log('********** Multer Error')};

//       console.log(req.file);

//       if(req.file){

//         //fs.unlinkSync(path.join(__dirname, '..', CSVFile.csvPath + '/' + req.file.filename));
//         //this is for saving the path of the uploaded file 
//         //user.csv = User.csvPath + '/' + req.file.filename;
//       }
      
//       return res.redirect('back');
//     })
//   }catch{

//   }
// }

module.exports.uploadFile = (req, res) => {

  CSVFile.uploadedCSV(req, res, async function(err){
    try{

      let csvFile = await CSVFile.findOne({name:req.file.originalname});
      if(csvFile){
        console.log('csv already exists');
        return res.redirect('back');
      }

      // let conversedFile = papa.parse(req.file.buffer.toString(),{
      //   delimiter:';',
      //   escapeChar:'\\',
      //   header: false,

      //   error:function(error){
      //     process.send(['search-failed', 'process']);
      //     console.log(error);
      //   }
      // });

      const CSVFileUP = req.file.path;
      const csvData = fs.readFileSync(CSVFileUP, 'utf8');

      const conversedFile = papa.parse(csvData, { 
        header: true 
      
      });

      console.log(conversedFile);

      if(req.file && req.file.mimetype == 'text/csv'){
        let csvFile = CSVFile.create({
          name: req.file.originalname,
          file: conversedFile.data
        });

        return res.redirect('back');
      }


    }catch(err){
      console.log("error", err);
      
    }
  })
}