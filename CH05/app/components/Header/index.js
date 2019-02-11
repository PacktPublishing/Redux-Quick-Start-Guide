import React, { Component } from 'react';

import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from './Logo';
import HeaderBg from './HeaderBg';

class Header extends Component {
  get renderUnauthenticate() {
    return (
      <div>
        <HeaderLink to="/register">Register</HeaderLink>
        <HeaderLink to="/login">Login</HeaderLink>
      </div>
    );
  }

  get renderRight() {
    return this.renderUnauthenticate;
  }

  render() {
    return (
      <div>
        <HeaderBg />
        <NavBar>
          <div>
            <A to="/">
              <Logo alt="Rask Lege" />
            </A>
          </div>
          {this.renderRight}
        </NavBar>
      </div>
    );
  }
}

export default Header;
