const Slider = require("../models/Slider");
const {
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedSlider = await Slider.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedSlider);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newSlider = new Slider(req.body);
  try {
    const savedSlider = await newSlider.save();
    res.status(200).json(savedSlider);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    res.status(200).json(slider);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async ( req, res ) => {
  try {
    const sliders = await Slider.find();

    res.status(200).json(sliders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
