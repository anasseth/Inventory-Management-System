const express = require("express");
var router = express.Router();
const COLORController = require("../../Controllers/COLOR/COLOR-Controller");
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

router.get("/", COLORController.getAllCOLORs);

router.post("/",COLORController.newCOLOR);

router.delete("/:id",COLORController.deleteOneCOLOR);

// router.put("/:id", UOMController.updateCart);

module.exports = router;
