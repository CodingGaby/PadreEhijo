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
  align-items: center;
  justify-content: center;
  padding: 20px;
  cursor: default;
`;

const Logo = styled.h1`

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
        <Logo>Cinturones</Logo>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
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