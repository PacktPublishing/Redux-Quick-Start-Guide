import React from "react";
import Link from "react-router-dom/Link";

import Header from "./Header";
import SocialMediaLinks from "./SocialMediaLinks";
import Logo from "./Logo";

const HeaderNav = () => (
  <div>
    <Logo />
    <Header />
    <SocialMediaLinks />
  </div>
);

export default HeaderNav;
