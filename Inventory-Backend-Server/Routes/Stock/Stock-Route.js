const express = require("express");
var router = express.Router();
const StockController = require("../../Controllers/Stock/Stock-Controller");
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

router.get("/", StockController.getAllStocks);

router.post("/",StockController.newStock);

router.delete("/:id",StockController.deleteOneStock);

// router.put("/:id", UOMController.updateCart);

module.exports = router;
