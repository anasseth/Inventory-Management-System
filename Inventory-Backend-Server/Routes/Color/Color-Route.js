const express = require("express");
var router = express.Router();
const ColorController = require("../../Controllers/Color/Color-Controller");
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

router.get("/", ColorController.getAllColors);

router.post("/",ColorController.newColor);

router.delete("/:id",ColorController.deleteOneColor);

// router.put("/:id", UOMController.updateCart);

module.exports = router;
