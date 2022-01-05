import React from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger"
const Navbar = ({setcategory}) => {
  return (
    <div className="nav">
      <div className="icon">
      <Hamburger setcategory={setcategory}/>
      </div>
        <img style={{cursor:"pointer"}}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
        height="80%" 
        alt="logo" />
       
    </div>
  );
};

export default Navbar;
