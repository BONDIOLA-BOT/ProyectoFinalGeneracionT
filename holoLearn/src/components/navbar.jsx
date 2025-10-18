import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/navbar.css";
import "../styles/variables.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          HoloLearn
        </NavLink>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <button
              className="toggle-mode"
              type="button"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>

        <ul className={`nav-auth ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="signup">
              Sign Up
            </NavLink>
          </li>
        </ul>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
}
