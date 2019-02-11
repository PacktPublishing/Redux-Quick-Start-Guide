import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import { Button } from 'antd';
import { onLogoutRequest } from 'containers/Login/actions';

import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Logo from './Logo';
import HeaderBg from './HeaderBg';

const UserItem = styled.span`
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
`;

class Header extends Component {
  get renderUnauthenticate() {
    const { currentUser = {} } = this.props;
    if (currentUser.id && currentUser.email) {
      return (
        <div>
          <UserItem key="UserItem">
            <FormattedMessage {...messages.helloHeader} />: {currentUser.name}
          </UserItem>
          <Button
            key="button"
            size="small"
            shape="circle"
            type="dashed"
            icon="logout"
            onClick={() => this.props.onLogout()}
          />
        </div>
      );
    }

    return (
      <div>
        <HeaderLink to="/register">
          <FormattedMessage {...messages.register} />
        </HeaderLink>
        <HeaderLink to="/login">
          <FormattedMessage {...messages.login} />
        </HeaderLink>
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

Header.propTypes = {
  onLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(onLogoutRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
