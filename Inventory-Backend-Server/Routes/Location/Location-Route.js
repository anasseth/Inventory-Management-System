const express = require("express");
var router = express.Router();
const LocationController = require("../../Controllers/Location/Location-Controller");
router.use(express.static("build"));
const authToken = require('../../Middleware/authToken');

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", LocationController.getAllLocations);

router.post("/",LocationController.newLocation);

router.delete("/:id",LocationController.deleteOneLocation);

// router.put("/:id", UOMController.updateCart);

module.exports = router;
