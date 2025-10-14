import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">HoloLearn</NavLink>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>

        <ul className={`nav-auth ${open ? "open" : ""}`}>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup" className="signup">Sign Up</NavLink></li>
        </ul>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
