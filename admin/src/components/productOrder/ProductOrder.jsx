import "./productOrder.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function WidgetLg() {
  const location = useLocation();
  const orderId= location.pathname.split("/")[2];
  const orderProducts = useSelector((state) =>
    state.order.orders.find((order) => order._id === orderId)
  )

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Product List</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Product</th>
          <th className="widgetLgTg">Image</th>
          <th className="widgetLgTg">Color</th>
          <th className="widgetLgTg">Size</th>
          <th className="widgetLgTg">Quantity</th>
        </tr>
        {orderProducts.products.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgId">
              <span className="widgetLgName">{order.productId}</span>
            </td>
            <td className="widgetLgDate">
              <img src={order.img} alt="" className="productListImg "/>
            </td>
            <td className="widgetLgDate">
                <div className="widgetLgDiv" style={{backgroundColor:`${order.color}`}} />
            </td>
            <td className="widgetLgDate">{order.size}</td>
            <td className="widgetLgAmount">{order.quantity}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}