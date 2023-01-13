import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";
import { deleteCart } from "../redux/cartRedux";
import JSConfetti from 'js-confetti'

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()

  const handleClick = () => {
    dispatch(
      deleteCart({})
    );
  };

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          userEmail: currentUser.email,
          userName: data.billing_details.name,
          products: cart.products.map((item) => ({
            productId: item._id,
            img: item.img,
            quantity: item._quantity,
            size: item.size,
            color: item.color,
          })),
          amount: cart.total,
          address: data.billing_details.address,
          postalCode: data.billing_details.address.postal_code,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Tu orden ha sido creada correctamente. Tu número de orden es:  ${orderId}`
        : `Correcto, tu orden esta siendo preparada...`}
      <Link to="/">
        <button onClick={handleClick} style={{ padding: 10, marginTop: 20, cursor: "pointer"}}>Regresar al Inicio</button>
      </Link>
    </div>
  );
};

export default Success;