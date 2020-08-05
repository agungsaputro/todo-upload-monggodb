var express = require("express");

const uploadsMiddlewar = require('../middleware/uploads');
const userControllers = require('../controllers/controller');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render("users/index");
})

router.post("/", uploadsMiddlewar.single('photo'), userControllers.photoUpload);


module.exports = router;