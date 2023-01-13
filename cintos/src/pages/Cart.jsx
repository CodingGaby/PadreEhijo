import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { deleteCart } from "../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover{
    text-decoration: underline;
  }
`;

const TopTexts = styled.div`
  padding: 10px;
  cursor: pointer;
  border: 2px solid #000000;
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  &:hover{
    text-decoration: underline;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;
const Infoo = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "132px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ fontSize: "15px"})}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000000;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmount = styled.div``;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;

const Message = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  display: "flex"; 
  align-items: center; 
  justify-content: center;
`

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const quantity = useSelector(state => state.cart.quantity)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleClick = () => {
    dispatch(
      deleteCart({})
    );
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { state: { stripeData: res.data, products: cart} });
      } catch {}
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, navigate, cart]);
  return (
    <Container>
      <Wrapper>
        <div style={{padding: "10px",}}></div>
        <Title>TU CARRITO</Title>
        <Top>
          <Link to="/">
          <TopButton>CONTINUAR COMPRANDO</TopButton>
          </Link>
          <TopTexts>
            <Link to="/cart">
              <TopText>Carrito de compras({quantity})</TopText>
            </Link>
          </TopTexts>
          <TopButton onClick={handleClick} type="filled" >BORRAR CARRITO</TopButton>          
        </Top>
        <Bottom>
        {quantity > 0 ? (
              <Info>
                {cart.products.map((product) => (
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductColor color={product.color} />
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                        <ProductAmount><b>Quantity:</b> {product.quantity}</ProductAmount>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductPrice>
                        $ {product.price * product.quantity}
                      </ProductPrice>
                    </PriceDetail>
                    
                  </Product> 
                ))}
                <Hr/>
              </Info>
            ) : (
              <Infoo>
                <Message>
                  <Link to="/">
                    No hay nada en tu carrito :(
                  </Link>
                </Message>
              </Infoo>
            )
            }
          <Summary>
            <SummaryTitle>RESUMEN DE LA ORDEN</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Entrega estimada</SummaryItemText>
              <SummaryItemPrice>$ 59.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Descuento de envio</SummaryItemText>
              <SummaryItemPrice>$ -59.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout 
              name="Padre e Hijo" 
              image="https://firebasestorage.googleapis.com/v0/b/shop-e92d5.appspot.com/o/IMG-0347_adobe_express.svg?alt=media&token=d0c11685-6ed6-4a60-a75c-935325fe60c4"
              billingAddress
              shippingAddress
              description={`El total es $${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>PAGAR AHORA</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Hr/>
      <Footer />
    </Container>
  );
};

export default Cart;