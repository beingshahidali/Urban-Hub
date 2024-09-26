import "../../routes/layout/layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import Notification from "../../components/notification/Notification.jsx";
function Layout() {
  return (
    <>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
        <Notification />
      </div>
    </>
  );
}
export default Layout;
