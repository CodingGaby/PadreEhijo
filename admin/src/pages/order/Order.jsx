import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    LocationOnOutlined,
    AttachMoneyOutlined
  } from "@material-ui/icons";
  import { useDispatch, useSelector } from "react-redux";
  import { useLocation } from "react-router-dom";
  import "./order.css";
  import {format} from "timeago.js"
import { useEffect } from "react";
import { getOrders } from "../../redux/apiCalls";
import ProductOrderList from "../../components/productOrder/ProductOrder";

  export default function Order() {
    const location = useLocation();
    const orderId= location.pathname.split("/")[2];
    const dispatch = useDispatch();
    const order = useSelector((state) =>
      state.order.orders.find((order) => order._id === orderId)
    )

    useEffect(() => {
      getOrders(dispatch);
    }, [dispatch]);
  
  
    /*const handleDelete = (id) => {
      deleteProduct(id, dispatch);
    };*/
  
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Order</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowBottom">
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{order.userName}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{order.userEmail}</span>
              </div>
              <span className="userShowTitle">Order Details</span>
              <div className="userShowInfo">
                <LocationOnOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">
                    {order.address.line1}, {order.address.postal_code}, {order.address.city}, {order.address.country}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">{order._id}</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">{format(order.createdAt)}</span>
              </div>
              <div className="userShowInfo">
                <AttachMoneyOutlined className="userShowIcon" />
                <span className="userShowInfoTitle">{order.amount}</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Order: {order._id}</span>
            <div>
              <ProductOrderList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  