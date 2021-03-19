import React, { useState } from "react";
import "../App.css";
import logo from "../logo.svg";
import { View } from "react";
import Dropdown from "react-dropdown";
import navbarS from "./navbarS";
import { link, Switch, Router, Route, NavLink, Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
        setDropdown(false);
    }else { 
        setDropdown(true);
    }
};
const onMouseLeave = () => {
  if (window.innerWidth < 960) {
      setDropdown(true);
  }else {
      setDropdown(false); 
  }};
  return (
    <div>
      <div className="Navbar">
        <div className="leftSide">
          <div className="links">
            <img src={process.env.PUBLIC_URL + "/logo.PNG"} />
            <input type="text" placeholder="recherche" />
            <a href="/magasin">Notre Magasin</a>
            <a href="/conf">Configurateur</a>
            
            <div></div>
            {/* <div style={{backgroundColor: 'black', height: 1}} /> */}
            <br />
          </div>
          {/* <button>open</button> */}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#DCDCDC",
          height: 1,
          //,backgroundImage: `url(${process.env.PUBLIC_URL + '//home.png'})`
       
        }}
      />
      
      <div className="Nav">
        <div className="leftSide">
          <div className="linkN">
            
            {/* <NavLink exact to="/" className="nav-links" >acceuil</NavLink>
            <Route path='/Home' /> */}
            {/* <div class="vl"></div> */}
             <a href="/">acceuil</a>
            <a href="/Btq">boutique</a>

            <a href="/Realisation">Nos realisation</a>
            <a href="/contactez nous">contactez nous</a> 
            
          </div>
        </div>
      </div>
       
    </div>
    

  );
}

export default Navbar;
