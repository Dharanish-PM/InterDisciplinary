import React from "react";
import "../css/stylesheet.css";
import "../css/dues.css";
import citlogo from "../resources/cit_logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>DUES</h2>
          <div className="logo-container">
            <img src={citlogo} alt="logo" className="cit_logo" />
            <h3>Coimbatore Institute of Technology</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
