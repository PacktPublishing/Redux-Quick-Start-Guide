import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from './UserForm';
import { onCreateRequest } from './actions';

class AddUser extends Component {
  onSubmit = e => {
    this.props.onCreate(e.toJS(), () => this.props.history.push('/'));
  };

  render() {
    return (
      <div className="add-user-containers">
        <Form
          isNew
          onSubmit={this.onSubmit}
          initialValues={{ role: 'user', gender: 'male' }}
          caption="Add new user"
        />
      </div>
    );
  }
}

AddUser.propTypes = {
  onCreate: PropTypes.func.isRequired,
  history: PropTypes.object,
};

export const mapDispatchToProps = dispatch => ({
  onCreate: (item, cb) => dispatch(onCreateRequest(item, cb)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(AddUser),
);
