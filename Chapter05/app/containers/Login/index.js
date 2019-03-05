import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoginForm from './Form';
import { onLoginRequest } from './actions';

// eslint-disable-next-line
class LoginPage extends Component {
  render() {
    return (
      <div className="login-containers">
        <LoginForm onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSubmit: PropTypes.func,
};

export const mapDispatchToProps = dispatch => ({
  onSubmit: e => dispatch(onLoginRequest(e.toJS())),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
