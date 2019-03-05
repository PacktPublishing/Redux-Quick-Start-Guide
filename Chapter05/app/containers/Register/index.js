import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Form from './Form';
import { onRegisterRequest } from './actions';

// eslint-disable-next-line
class RegisterPage extends Component {
  render() {
    return (
      <div className="register-containers">
        <Form onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  onSubmit: PropTypes.func,
};

export const mapDispatchToProps = dispatch => ({
  onSubmit: e => dispatch(onRegisterRequest(e.toJS())),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(RegisterPage);
