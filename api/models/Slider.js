const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true},
    img: { type: String, required: true},
    title: { type: String, required: true },
    desc: { type: String, required: true },
    bg: {type: String, required: true},
    cat: {type: String, required: true},
  }
);

module.exports = mongoose.model("Slider", SliderSchema);