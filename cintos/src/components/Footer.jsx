import { Facebook, Instagram, MailOutline, Phone, Room, WhatsApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: default;
`;

const Logo = styled.h1`

`;

const ImgLogo = styled.img`
  height: 200px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  &:hover{
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  &:hover{
    text-decoration: underline;
  }
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Padre e Hijo</Logo>
        <ImgLogo style={{cursor: "pointer"}} src="https://firebasestorage.googleapis.com/v0/b/shop-e92d5.appspot.com/o/IMG-0347_adobe_express.svg?alt=media&token=d0c11685-6ed6-4a60-a75c-935325fe60c4"/>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/products/Nuevo">
              Nuevo
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              Proximamente...
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <a rel="noreferrer" href="https://goo.gl/maps/dWkGiAQpotAZoqt49" target="_blank">
            <Room style={{marginRight:"10px"}}/> Ojo de Agua 495, Cuautlanciongo, Pue.
          </a>
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +52 (221) 221-6730
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> padreehijop_h@hotmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;