import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'query-string';
import Form from './Form';
import List from './List';
import { onSearchRequest, onRemoveRequest } from './actions';

class User extends Component {
  render() {
    const { location } = this.props;
    const newProps = qs.parse(location.search);

    return (
      <div className="all-user-containers">
        <Form onSubmit={this.onSubmit} initialValues={newProps} />
        <List
          dataSource={{}}
          keyword={newProps.s}
          onRemove={this.props.onRemove}
          onReload={() => this.props.onSubmit(newProps)}
        />
      </div>
    );
  }
}

User.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export const mapStateToProps = () => {};

export const mapDispatchToProps = dispatch => ({
  onSubmit: s => dispatch(onSearchRequest(s)),
  onRemove: s => dispatch(onRemoveRequest(s)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
