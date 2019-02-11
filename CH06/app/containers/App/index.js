import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import LoginPage from 'containers/Login/Loadable';
import RegisterPage from 'containers/Register/Loadable';
import HomePage from 'containers/Home/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading } from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import { onApplicationLoad } from './actions';
import GlobalStyle from '../../global-styles';
import saga from './saga';
import './style.css';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;

  .btn {
    line-height: 0;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    props.onApplicationLoad();
  }

  render() {
    return (
      <AppWrapper>
        <Helmet titleTemplate="%s - Rask Lege HVL" defaultTitle="Rask Lege HVL">
          <meta name="description" content="A Rask Lege HVL application" />
        </Helmet>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          {this.props.isLoaded && <Route path="/" component={HomePage} />}
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  onApplicationLoad: PropTypes.func,
  isLoaded: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoaded: makeSelectLoading(),
});

const mapDispatchToProps = dispatch => ({
  onApplicationLoad: () => dispatch(onApplicationLoad()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'login', saga });

export default withRouter(
  compose(
    withSaga,
    withConnect,
  )(App),
);
