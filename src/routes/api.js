const express = require("express");
const router = express.Router();
const apiEndPoint = require("../utiliy/apiEndPoints");
const appController = require("../controllers/appController");




router.get(apiEndPoint.Home, appController.home);
router.post(apiEndPoint.Signin, appController.signin);



module.exports= router;