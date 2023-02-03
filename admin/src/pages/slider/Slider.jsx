import { useLocation } from "react-router-dom";
import "./slider.css";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateSlider } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Slider() {

  const location = useLocation();
  const sliderId = location.pathname.split("/")[2];
  const slider = useSelector((state) =>
    state.slider.sliders.find((slider) => slider._id === sliderId)
  );

  const history = useHistory();
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();

  

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const slider = {
      ...inputs,
    };
      updateSlider(sliderId, slider, dispatch);
      history.push("/orders");      
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Slider {slider.id}</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={slider.img} alt="" className="productInfoImg" />
            <span className="productName">{slider.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{slider._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">{slider.desc}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Categoria:</span>
              <span className="productInfoValue">{slider.cat}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Titulo Slider</label>
            <input type="text" name="title" placeholder={slider.title} defaultValue={slider.title} onChange={handleChange} />
            <label>Slider Description</label>
            <input type="text" name="desc" placeholder={slider.desc} defaultValue={slider.desc} onChange={handleChange} />
            <label>Categoria</label>
            <input type="text" name="cat" placeholder={slider.cat} defaultValue={slider.cat} onChange={handleChange} />
            <label>ID</label>
            <input type="text" name="id" placeholder={slider.id} defaultValue={slider.id} onChange={handleChange} />
            <label>Background</label>
            <input type="text" name="bg" placeholder={slider.bg} defaultValue={slider.bg} onChange={handleChange} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={slider.img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" name="img"/>
            </div>
            <button className="productButton" onClick={handleClick}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};