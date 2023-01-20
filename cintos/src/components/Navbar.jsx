import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css"
import Announcement from "./Announcement";
import { logOut } from "../redux/userRedux";
import { deleteCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "54px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  ${mobile({ padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ })}
`;

const Language = styled.span`
  font-size: 14px;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "15.3px"})}
  text-decoration: none;
`;

const ImgLogo = styled.img`
  height: 35px;
  margin-left: 25px;
  ${mobile({ height: "30px", margin: "none" })}
`;

const SearchIcon = styled.div`
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "right"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginRight: "10px", marginLeft: "2px"})}
  &:hover{
    text-decoration: underline;
  }
`;
const MenuItemm = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginRight: "10px", marginLeft: "2px"})}
  &:hover{
    text-decoration: underline;
  }
  &:hover span {
    display: none
  }
  &:hover:after {
    content: "LogOut"
  }
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(
      logOut({})
    );
    dispatch(
      deleteCart({})
    );
  };

  return (
    <Container className="navbar">
        <Wrapper>
          <Left>
            <Link to="/">
              <ImgLogo style={{cursor: "pointer"}} src="https://firebasestorage.googleapis.com/v0/b/shop-e92d5.appspot.com/o/IMG-0347_adobe_express.svg?alt=media&token=d0c11685-6ed6-4a60-a75c-935325fe60c4"/>
            </Link>
            <Language style={{marginLeft:"25px"}}>ESP</Language>
            <SearchIcon>
              <Search style={{fontSize:24, border: "0.5px", display: "flex",alignItems:"center", marginLeft: "25px", padding: "5px", cursor: "not-allowed",}}/>
            </SearchIcon>
          </Left>
          <Center>
            <Link to="/">
            <Logo>Padre e Hijo</Logo>
            </Link>
          </Center>
          <Right>
            {user ? (
              <MenuItemm onClick={handleClick} style={{fontSize: "15px", display: "flex", alignItems: "center",}}>
                <img
                  src={
                    user.img || "https://firebasestorage.googleapis.com/v0/b/shop-e92d5.appspot.com/o/Sample_User_Icon.png?alt=media&token=f9e7d38f-54b2-489b-9b3b-380930590f9a"
                  }
                  alt=""
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    marginRight: "5px",
                    paddingLeft:"10px",
                  }}/>
                <span>
                  {user.username}
                </span>
              </MenuItemm>
            ) : (
              <Link to="/login">
                <MenuItem>
                  LOG IN
                </MenuItem>
              </Link>
            )
            }
            <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingBasketOutlined/>
              </Badge>
            </MenuItem>
            </Link>
          </Right>
        </Wrapper>
        <Link to="/products/Nuevo">
          <Announcement/>
        </Link>
    </Container>
  )
}

export default Navbar