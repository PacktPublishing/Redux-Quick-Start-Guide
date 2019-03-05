import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Spin } from 'antd';
import { Field, reduxForm } from 'redux-form/immutable';
import renderInput from 'components/Form/Fields/input';
import H1 from 'components/H1';

import './style.css';

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, message } = props;

  return (
    <Form onSubmit={handleSubmit} className="form-login-containers">
      <Spin spinning={submitting} tip="Submitting...">
        <H1 className="center">Rask Lege</H1>
        <Field
          name="email"
          hasFeedback
          component={renderInput}
          disabled={submitting}
          label="Email address"
          placeholder="example@domain.com"
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
        <Form.Item className="center">
          <Button
            type="primary"
            htmlType="submit"
            className="btn-submit"
            disabled={pristine || submitting}
          >
            Log in
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

  return errors;
};

LoginForm.propTypes = {
  pristine: PropTypes.bool,
  message: PropTypes.string,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'login-form',
  validate,
})(LoginForm);
