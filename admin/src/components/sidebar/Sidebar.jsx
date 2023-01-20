import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink to="/users" exact className="link">
                <PermIdentity className="sidebarIcon" />
                Users
              </NavLink>
            </li>
            <li className="sidebarListItem" >
              <NavLink to="/products" className="link">
                <Storefront className="sidebarIcon" />
                Products
              </NavLink>
            </li>
            <li className="sidebarListItem" >
              <NavLink to="/orders" className="link">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
