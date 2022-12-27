import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://firebasestorage.googleapis.com/v0/b/shop-e92d5.appspot.com/o/register.webp?alt=media&token=789348ee-392e-48fc-8899-24f118d10800")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 5px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #D1A681;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: larger;
  display: block;
  padding: 5px;
  margin: 10px auto;
`;

const Checkbox = styled.input`
  width: 13px;
  height: 13px;
  padding: 0;
  margin-left: 10px;
  vertical-align: bottom;
  position: relative;
  top: -1px;
  *overflow: hidden;
  cursor: pointer;
`;

const Linky = styled.a`
  text-align: center;
  text-align: center;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  display: block;
  margin: 2px auto;
  width: 40%;
  border: none;
`;

export default function Register() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    const user = { ...inputs };
    addUser(user, dispatch);
    Navigate('/login');
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREA UNA CUENTA</Title>
        <Form>
          <Input placeholder="Nombre"/>
          <Input placeholder="Apellido" />
          <Input placeholder="Nombre de Usuario" name="username" type="text" onChange={handleChange}/>
          <Input placeholder="Email" name="email" type="email" onChange={handleChange}/>
          <Input placeholder="Contraseña" name="password" type="new-password" onChange={handleChange}/>
          <Input placeholder="Confirmar contraseña" type="new-password"/>
          <Agreement>
            Al crear una cuenta, doy mi consentimiento para el procesamiento de mis datos personales.
            datos de acuerdo con la <b>Politica de Privacidad</b>
            <Checkbox type="checkbox"/>
          </Agreement>
          <Button onClick={handleClick}>CREAR</Button>
        </Form>
        <Link to="/login">
          <Linky>Inicia Sesión</Linky>
        </Link>
      </Wrapper>
    </Container>
  );
};
