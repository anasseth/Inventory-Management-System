const mongoose = require("mongoose");

const UOMSchema = new mongoose.Schema({
 uom_id:String,
 name:String,
});

UOMSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("UOM", UOMSchema);
