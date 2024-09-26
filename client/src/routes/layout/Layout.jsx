import "../../routes/layout/layout.scss";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import Notification from "../../components/notification/Notification.jsx";
import { AuthContext } from "../../context/authContext.jsx";
import { useContext } from "react";
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
function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return <Navigate to="/login" />;

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
export { Layout, RequireAuth };
