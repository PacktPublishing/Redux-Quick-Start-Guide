import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { makeSelectLogedIn } from 'containers/App/selectors';
import Form from './Form';
import saga from './saga';
import { onRegisterRequest } from './actions';

class RegisterPage extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="register-containers">
        <Helmet>
          <title>Register Page</title>
          <meta name="description" content="Register page" />
        </Helmet>
        <Form onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  onSubmit: PropTypes.func,
  history: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

export const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLogedIn(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: e => dispatch(onRegisterRequest(e.toJS())),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'register', saga });

export default compose(
  withSaga,
  withConnect,
)(RegisterPage);
