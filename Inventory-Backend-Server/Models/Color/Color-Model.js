const mongoose = require("mongoose");

const COLORSchema = new mongoose.Schema({
 color_id:String,
 description:String,
 active:String,
  
});

COLORSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("COLOR", COLORSchema);
