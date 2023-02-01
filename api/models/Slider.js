const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema(
  {
    idSlider: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
  }
);

module.exports = mongoose.model("Slider", SliderSchema);