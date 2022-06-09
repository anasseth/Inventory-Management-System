require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

console.log("Connecting to", url);
mongoose
  .connect(url)
  .then((result) => {
    console.log("Connected to MongoDB Inventory-Database");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

// adding Helmet to enhance Rest API's security
app.use(helmet());
// adding morgan to log HTTP requests
app.use(morgan("combined"));
// Rest of Method
app.use(express.static("build"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var authenticationRouter = require("./Routes/SecuringAPI/Secure-Route");
var blogRouter = require("./Routes/Blog/Blog-Route");
var UOMRouter = require("./Routes/UOM/UOM-Route");
var websiteInfoRouter = require("./Routes/Website-Info/WebsiteInfo-Route");
const { prototype } = require("jsonwebtoken/lib/JsonWebTokenError");

app.use("/api/authentication", authenticationRouter);
app.use("/api/uom", UOMRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/webinfo", websiteInfoRouter);

/*
api/uom GET
api/uom POST
api/uom/id DELETE
*/

const errorHandler = (error, request, response, next) => {
  console.error(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }
  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);
app.use(errorHandler);
app.options("*", cors());

const PORT = 3001;
app.listen(process.env.PORT || PORT);
console.log(`Server running on port ${PORT}`);
