import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Spin } from 'antd';
import { Field, reduxForm } from 'redux-form/immutable';
import renderInput from 'components/Form/Fields/input';

import './style.css';

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting, message } = props;

  return (
    <Form onSubmit={handleSubmit} className="form-register-containers">
      <Spin spinning={submitting} tip="Submitting...">
        <h1 className="center">
          Register an account <br />
          to Rask Lege
        </h1>
        <Field
          name="email"
          hasFeedback
          component={renderInput}
          disabled={submitting}
          label="Email"
          placeholder="Email"
        />
        <Field
          hasFeedback
          type="password"
          name="password"
          component={renderInput}
          disabled={submitting}
          label="Password"
          placeholder="Password"
        />
        <Field
          hasFeedback
          type="password"
          name="confirmPassword"
          component={renderInput}
          disabled={submitting}
          label="Confirm Password"
          placeholder="Confirm Password"
        />
        <Field
          hasFeedback
          name="name"
          component={renderInput}
          disabled={submitting}
          label="Name"
          placeholder="Full Name"
        />
        <Form.Item className="center">
          <Button
            type="primary"
            htmlType="submit"
            className="btn-submit"
            disabled={pristine || submitting}
          >
            Create an account
          </Button>
        </Form.Item>
        {!!message && <p className="caption-invalid">{message}</p>}
      </Spin>
    </Form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.get('password')) {
    errors.password = "Password can't be blank";
  }

  if (!values.get('confirmPassword')) {
    errors.confirmPassword = "Confirm password can't be blank";
  }

  if (
    values.get('password') &&
    values.get('confirmPassword') &&
    values.get('password') !== values.get('confirmPassword')
  ) {
    errors.confirmPassword = "Confirm password didn't match";
  }

  if (!values.get('name')) {
    errors.name = "Name can't be blank";
  }

  return errors;
};

RegisterForm.propTypes = {
  pristine: PropTypes.bool,
  message: PropTypes.string,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'register-form',
  validate,
})(RegisterForm);
