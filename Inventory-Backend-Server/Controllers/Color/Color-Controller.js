const Color = require("../../Models/Color/Color-Model");

const getAllColors = (req, res, next) => {
  Color.find({}).then((Colors) => {
    res.json(Colors);
  });
};

const newColor = (req, res, next) => {
  const body = req.body;
  console.log(req.body);

  if (body.description == undefined) {
    return res.status(400).json({ error: "Color Name Missing" });
  }
  else if (body.color_id == undefined || body.color_id == null) {
    return res.status(400).json({ error: "Color ID Missing" });
  }
  else if (body.active == undefined || body.active == null) {
    return res.status(400).json({ error: "Active is Null" });
  }

  const ColorObject = new Color({
    color_id: body.color_id,
    description: body.description,
    active: body.active
  });

  ColorObject.save().then((saveColor) => {
    res.json(saveColor);
  });
};

const deleteOneColor = (req, res, next) => {
  Color.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
};

module.exports = {
  getAllColors,
  newColor,
  deleteOneColor,
};
