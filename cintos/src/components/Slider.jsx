import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #D1A681;
  color: white;
  cursor: pointer;
  border-color: #06060641;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const getSliders = async () => {
      try {
        const res = await axios.get("https://padree-hijo-api.vercel.app/api/sliders");
        setSliders(res.data);
      } catch {}
    };
    getSliders();
  }, []);

  const handleClick = (direction) => {
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
           <ArrowBackIosRounded/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliders.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to={`/products/${item.cat}`}>
                        <Button>COMPRA AHORA</Button>
                        </Link>
                    </InfoContainer>
                </Slide>
            ))}
            {sliders.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to={`/products/${item.cat}`} style={{ position:"sticky", left: 950}}>
                        <Button>COMPRA AHORA</Button>
                        </Link>
                    </InfoContainer>
                </Slide>
            ))}
            {sliders.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to={`/products/${item.cat}`} style={{ position:"sticky", left: 950}}>
                        <Button>COMPRA AHORA</Button>
                        </Link>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
           <ArrowForwardIosRounded/>
        </Arrow>
    </Container>
  )
}

export default Slider