const UOM = require("../../Models/UOM/UOM-Model");

const getAllUOMs = (req, res, next) => {
  UOM.find({}).then((UOMs) => {
    res.json(UOMs);
  });
};


const newUOM = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  
  if (body.name == undefined) {
    return res.status(400).json({ error: "UOM Name Missing" });
  }
  else if(body.uom_id == undefined || body.uom_id == null){
    return res.status(400).json({ error: "UOM ID Missing" });
  }

  const UOMObject = new UOM({
   uom_id:body.uom_id,
   name:body.name
  });

  // console.log(body);
  // console.log(UOMObject);

  UOMObject.save().then((saveUOM) => {
    res.json(saveUOM);
  });
};

//DELETE '/tea/:name'
const deleteOneUOM = (req, res, next) => {
    UOM.findByIdAndRemove(req.params.id)
      .then((result) => {
        res.status(204).end();
      })
      .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getAllUOMs,
  newUOM,
  deleteOneUOM,
};
