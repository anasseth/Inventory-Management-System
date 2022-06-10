const Location = require("../../Models/Location/Location-Model");

const getAllLocations = (req, res, next) => {
  Location.find({}).then((Locations) => {
    res.json(Locations);
  });
};


const newLocation = (req, res, next) => {
  const body = req.body;
  console.log(req.body);
  
  if (body.description == undefined) {
    return res.status(400).json({ error: "Description Name Missing" });
  }
 /* else if(body.color_id == undefined || body.color_id == null){
    return res.status(400).json({ error: "Color ID Missing" });
  }*/
  else if (body.active == undefined || body.active == null){
  return res.status(400).json({ error: "Active is Null" });
}

  const LocationObject = new Location({
   
   description:body.description,
   active:body.active
  });

  // console.log(body);
  // console.log(UOMObject);

  LocationObject.save().then((saveLocation) => {
    res.json(saveLocation);
  });
};

//DELETE '/tea/:name'
const deleteOneLocation = (req, res, next) => {
  Location.findByIdAndRemove(req.params.id)
      .then((result) => {
        res.status(204).end();
      })
      .catch((error) => next(error));
};

//export controller functions
module.exports = {
  getAllLocations,
  newLocation,
  deleteOneLocation,
};
