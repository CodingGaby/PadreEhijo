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
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink to="/" exact className="link" activeClassName="active"><LineStyle className="sidebarIcon"/>Home</NavLink>
            </li>
            <li exact className="notlink" >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="notlink" >
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
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
            <li className="notlink" >
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="notlink" >
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="notlink" >
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="notlink" >
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="notlink" >
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="notlink" >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="notlink" >
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
