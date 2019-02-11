import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import { makeSelectLogedIn } from 'containers/App/selectors';
import LoginForm from './Form';
import saga from './saga';
import { onLoginRequest } from './actions';

class LoginPage extends Component {
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
      <div className="login-containers">
        <LoginForm onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSubmit: PropTypes.func,
  history: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

export const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLogedIn(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: e => dispatch(onLoginRequest(e.toJS())),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withSaga,
  withConnect,
)(LoginPage);
