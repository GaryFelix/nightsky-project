import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

export const Header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY>=100) {
      setColor(true);
    } else{
      setColor(false);
    }
  };

  if(color){
    window.addEventListener("scroll", changeColor);
  }else{
    window.removeEventListener("scroll", changeColor);
  }

  const[dropMenu, setDropMenu] = useState(false);

  return (
    <div className={color ? "header nav-bg" : 'header'} >
      <nav>
        <Link to="/" id="title">
          <h2>NightSky</h2>
        </Link>
        <ul className={dropMenu ? "drop-down-menu": "no-drop-menu"}>
          <li> 
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/experiences" className="links">
              Experiences
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="links">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link className="links-btn">Book a session</Link>
          </li>
        </ul>
      </nav>
      <button id="dropDownMenu" onClick={()=> setDropMenu(!dropMenu)}>Menu</button>
    </div>
  );
};
