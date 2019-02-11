import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'query-string';
import styled from 'styled-components';
import { Pagination } from 'antd';
import { createStructuredSelector } from 'reselect';
import {
  getUsers,
  getTotalPage,
  getTotalItem,
  getCurrentPage,
  getDeleteItem,
} from './selectors';
import Form from './Form';
import List from './List';
import { onSearchRequest, onRemoveRequest } from './actions';

const PaginationView = styled.div`
  margin: 40px 0;
`;

class User extends Component {
  componentDidMount() {
    this.props.onSubmit(qs.parse(this.props.location.search));
  }

  componentWillReceiveProps(nextProps) {
    const newProps = qs.parse(nextProps.location.search);
    const oldProps = qs.parse(this.props.location.search);

    if (
      oldProps.s !== newProps.s ||
      oldProps.page !== newProps.page ||
      nextProps.deleting !== this.props.deleting
    ) {
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
    const { results, totalPage, totalItem, currentPage, location } = this.props;
    const newProps = qs.parse(location.search);

    return (
      <div className="all-user-containers">
        <Form onSubmit={this.onSubmit} initialValues={newProps} />
        <List
          dataSource={results}
          keyword={newProps.s}
          onRemove={this.props.onRemove}
          onReload={() => this.props.onSubmit(newProps)}
        />
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

User.propTypes = {
  results: PropTypes.array,
  deleting: PropTypes.string,
  totalPage: PropTypes.number,
  totalItem: PropTypes.number,
  currentPage: PropTypes.number,
  onRemove: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  results: getUsers(),
  totalPage: getTotalPage(),
  totalItem: getTotalItem(),
  deleting: getDeleteItem(),
  currentPage: getCurrentPage(),
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: s => dispatch(onSearchRequest(s)),
  onRemove: s => dispatch(onRemoveRequest(s)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
