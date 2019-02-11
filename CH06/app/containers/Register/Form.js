import React from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { Form, Button, Spin } from 'antd';
import { FormattedHTMLMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';
import renderInput from 'components/Form/Fields/input';
import withIntl from 'utils/withIntl';
import Message from './messages';

import './style.css';

const RegisterForm = props => {
  const { handleSubmit, pristine, submitting, message, formatMessage } = props;

  return (
    <Form onSubmit={handleSubmit} className="form-register-containers">
      <Spin spinning={submitting} tip="Submitting...">
        <h1 className="center">
          <FormattedHTMLMessage {...Message.header} />
        </h1>
        <Field
          name="email"
          hasFeedback
          component={renderInput}
          disabled={submitting}
          label={formatMessage(Message.labelEmail)}
          placeholder={formatMessage(Message.placeholderEmail)}
        />
        <Field
          hasFeedback
          type="password"
          name="password"
          component={renderInput}
          disabled={submitting}
          label={formatMessage(Message.labelPassword)}
          placeholder={formatMessage(Message.placeholderPassword)}
        />
        <Field
          hasFeedback
          type="password"
          name="confirmPassword"
          component={renderInput}
          disabled={submitting}
          label={formatMessage(Message.labelConfirmPassword)}
          placeholder={formatMessage(Message.placeholderConfirmPassword)}
        />
        <Field
          hasFeedback
          name="name"
          component={renderInput}
          disabled={submitting}
          label={formatMessage(Message.labelName)}
          placeholder={formatMessage(Message.placeholderName)}
        />
        <Form.Item className="center">
          <Button
            type="primary"
            htmlType="submit"
            className="btn-submit"
            disabled={pristine || submitting}
          >
            <FormattedHTMLMessage {...Message.submit} />
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
    errors.email = "Email can't be blank";
  } else if (!validator.isEmail(values.get('email'))) {
    errors.email = 'Email is invalid';
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
  formatMessage: PropTypes.func,
};

export default reduxForm({
  form: 'register-form',
  validate,
})(withIntl(RegisterForm));
