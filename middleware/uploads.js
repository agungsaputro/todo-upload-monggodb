const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/uploads/");
  },
  filename: function (req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

const upload =  multer({
    storage: storageEngine,
    limits: { fileSize:200000 },
    fileFilter: function(req, file, callback){
      validateFile(file, callback);
    }
  }).single('photo');

var validateFile = function(file, cb ){
    allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType  = allowedFileTypes.test(file.mimetype);
    if(extension && mimeType){
      return cb(null, true);
    }else{
      cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
  }

module.exports = upload;
