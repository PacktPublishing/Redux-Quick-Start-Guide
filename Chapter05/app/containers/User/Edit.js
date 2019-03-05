import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from './UserForm';
import { onUpdateRequest, onDetailRequest } from './actions';

class EditUser extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="add-user-containers">
        <Form
          initialValues={user}
          onSubmit={this.onSubmit}
          caption="Edit user"
        />
      </div>
    );
  }
}

EditUser.propTypes = {
  user: PropTypes.object,
};

export const mapStateToProps = () => {};

export const mapDispatchToProps = dispatch => ({
  onFetch: id => dispatch(onDetailRequest(id)),
  onUpdate: (id, item, cb) => dispatch(onUpdateRequest(id, item, cb)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(EditUser),
);
