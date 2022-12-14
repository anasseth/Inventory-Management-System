const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
 description:String,
 active:String,
  
});

LocationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Location", LocationSchema);
