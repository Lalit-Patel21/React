import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
const Header = () => {
  // let btnName = "logIn";
  const [btnNameReact, setBtnNameReact] = useState("logIn");
  console.log("header render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              // btnName = "logOut";
              // console.log(btnName);
              btnNameReact === "logIn"
                ? setBtnNameReact("logOut")
                : setBtnNameReact("logIn");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
