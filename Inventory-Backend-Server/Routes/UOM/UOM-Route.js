const express = require("express");
var router = express.Router();
const UOMController = require("../../Controllers/UOM/UOM-Controller");
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

router.get("/", UOMController.getAllUOMs);

router.post("/",[authToken.verifyToken],UOMController.newUOM);

router.delete("/:id",[authToken.verifyToken],UOMController.deleteOneUOM);

// router.put("/:id", UOMController.updateCart);

module.exports = router;
