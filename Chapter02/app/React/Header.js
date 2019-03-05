import React from "react";
import Link from "react-router-dom/Link";

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">Services</Link>
    </li>
    <li>
      <Link to="/topics">Contact Us</Link>
    </li>
    <li>
      <Link to="/topics">Login</Link>
    </li>
  </ul>
);

export default Header;
