import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <h1>Mobile Detailing</h1>
          <p>Est 2024</p>
        </Link>
      </div>
      <div className="links">
        <Link className="link" to={"/services"}>
          Services
        </Link>

        <Link className="link" to={"/contact"}>
          Contact
        </Link>

        <Link className="link" to={"/about"}>
          About
        </Link>

        <Link className="link" to={"/login"}>
          Login
        </Link>

        <Link className="book" to={"/book"}>
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
