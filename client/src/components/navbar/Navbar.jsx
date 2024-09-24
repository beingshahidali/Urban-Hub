import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img
            src="https://www.svgrepo.com/show/187238/skyscraper-urban.svg"
            alt="Urban image not found"
          ></img>
          <span>Urban Hub</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Address</a>
      </div>
      <div className="right">
        {user ? (
          <>
            <div className="user">
              <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" />
              <span>John Doe</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span> Profile </span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            alt="Menu icon"
            onClick={() => setOpen(!open)}
            style={{
              filter: open
                ? "invert(1) brightness(2)"
                : "invert(0) brightness(1)",
            }}
          ></img>
        </div>
        <div className={open ? "menu active " : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Address</a>
          <a href="/">Sign In</a>
          <a href="/">Register</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
