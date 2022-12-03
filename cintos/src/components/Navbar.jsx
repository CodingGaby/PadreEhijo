import { Badge } from "@material-ui/core";
import { NoteAdd, Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./navbar.css"
import Announcement from "./Announcement";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
  text-decoration: none;
`;

const ImgLogo = styled.img`
  height: 35px;
  margin-left: 25px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "left" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container className="navbar">
        <Wrapper>
          <Left>
            <Link to="/">
              <ImgLogo style={{cursor: "pointer"}} src="https://firebasestorage.googleapis.com/v0/b/shop-e92d5.appspot.com/o/IMG-0347_adobe_express.svg?alt=media&token=d0c11685-6ed6-4a60-a75c-935325fe60c4"/>
            </Link>
            <Language style={{marginLeft:"25px"}}>ESP</Language>
            <Search style={{fontSize:24, border: "0.5px", display: "flex",alignItems:"center", marginLeft: "25px", padding: "5px", cursor: "not-allowed",}}/>
           
          </Left>
          <Center>
            
            <Link to="/">
            <Logo>PadreHijo</Logo>
            </Link>
          </Center>
          <Right>
            <Link to="/register">
            <MenuItem>REGISTRATE</MenuItem>
            </Link>
            <Link to="/login">
            <MenuItem>LOG IN</MenuItem>
            </Link>
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingBasketOutlined/>
              </Badge>
            </MenuItem>
            </Link>
          </Right>
        </Wrapper>
        <Announcement/>
    </Container>
  )
}

export default Navbar