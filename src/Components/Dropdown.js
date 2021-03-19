import {React, menu, useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
  <>
  <ul onClick={handleClick}
  className={click ? 'drop-menu clicked' : Dropdown-menu}>
      {MenuItems.map((item, index) => {
          return (
              <li key={index}>
                  <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}></Link>
              </li>
          )
      })}
  </ul>
  </>);
}
export default Dropdown;
