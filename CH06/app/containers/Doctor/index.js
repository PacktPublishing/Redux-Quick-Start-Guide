import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import qs from 'query-string';
import styled from 'styled-components';
import { Pagination } from 'antd';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { createStructuredSelector } from 'reselect';
import {
  getDoctors,
  getTotalPage,
  getTotalItem,
  getCurrentPage,
} from './selectors';
import Form from './Form';
import saga from './saga';
import reducer from './reducer';
import List from './List';
import { onSearchRequest } from './actions';

const PaginationView = styled.div`
  margin: 40px 0;
`;

class Doctor extends Component {
  componentDidMount() {
    const newProps = qs.parse(this.props.location.search);

    if (newProps.s) {
      this.props.onSubmit(newProps);
    }
  }

  componentWillReceiveProps(nextProps) {
    const newProps = qs.parse(nextProps.location.search);
    const oldProps = qs.parse(this.props.location.search);

    if (oldProps.s !== newProps.s || oldProps.page !== newProps.page) {
      this.props.onSubmit(newProps);
    }
  }

  onSubmit = e => {
    this.props.history.push({
      search: qs.stringify({
        ...qs.parse(this.props.location.search),
        ...e.toJS(),
        page: 1,
      }),
      pathname: this.props.history.location.pathname,
    });
  };

  onChange = page => {
    this.props.history.push({
      search: qs.stringify({
        ...qs.parse(this.props.location.search),
        page,
      }),
      pathname: this.props.history.location.pathname,
    });
  };

  render() {
    const {
      results,
      totalPage = 0,
      totalItem,
      currentPage,
      location,
    } = this.props;
    const newProps = qs.parse(location.search);

    return (
      <div className="doctor-containers">
        <Form onSubmit={this.onSubmit} initialValues={newProps} />
        <List dataSource={results} keyword={newProps.s} />
        <PaginationView>
          {totalPage > 0 && (
            <Pagination
              style={{ marginTop: 10 }}
              current={currentPage + 1}
              total={totalItem}
              pageSize={10}
              onChange={this.onChange}
            />
          )}
        </PaginationView>
      </div>
    );
  }
}

Doctor.propTypes = {
  results: PropTypes.array,
  totalPage: PropTypes.number,
  totalItem: PropTypes.number,
  currentPage: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  results: getDoctors(),
  totalPage: getTotalPage(),
  totalItem: getTotalItem(),
  currentPage: getCurrentPage(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: s => dispatch(onSearchRequest(s)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'doctor', saga });
const withReducer = injectReducer({ key: 'doctor', reducer });

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(Doctor);
