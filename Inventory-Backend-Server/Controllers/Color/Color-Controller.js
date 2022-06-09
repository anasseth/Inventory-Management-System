const COLOR = require("../../Models/COLOR/COLOR-Model");

const getAllCOLORs = (req, res, next) => {
  COLOR.find({}).then((COLORs) => {
    res.json(COLORs);
  });
};


const newCOLOR = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  
  if (body.description == undefined) {
    return res.status(400).json({ error: "Color Name Missing" });
  }
  else if(body.color_id == undefined || body.color_id == null){
    return res.status(400).json({ error: "Color ID Missing" });
  }
  else if (body.active == undefined || body.active == null){
  return res.status(400).json({ error: "Active is Null" });
}

  const COLORObject = new COLOR({
   color_id:body.color_id,
   description:body.description,
   active:body.active
  });

  // console.log(body);
  // console.log(UOMObject);

  COLORObject.save().then((saveCOLOR) => {
    res.json(saveCOLOR);
  });
};

//DELETE '/tea/:name'
const deleteOneCOLOR = (req, res, next) => {
    COLOR.findByIdAndRemove(req.params.id)
      .then((result) => {
        res.status(204).end();
      })
      .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getAllCOLORs,
  newCOLOR,
  deleteOneCOLOR,
};
