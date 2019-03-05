import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { Form, Spin, Button } from 'antd';
import { Field, reduxForm } from 'redux-form/immutable';
import renderInput from 'components/Form/Fields/input';
import renderSelect from 'components/Form/Fields/select';
import withIntl from 'utils/withIntl';
import Message from './messages';

import './style.css';

class UserForm extends Component {
  _form = React.createRef();

  clickSubmit() {
    this._form.current.submit();
  }

  render() {
    const {
      isNew,
      caption,
      handleSubmit,
      submitting,
      formatMessage,
    } = this.props;
    const roles = ['admin', 'practitioner', 'user'].map(key => ({
      label: formatMessage(Message[`${key}RoleOption`]),
      key,
    }));
    const genders = ['male', 'female', 'other'].map(key => ({
      label: formatMessage(Message[`${key}GenderOption`]),
      key,
    }));

    return (
      <Form
        ref={this._form}
        onSubmit={handleSubmit}
        className="user-form-user-containers normal-form"
      >
        <Spin spinning={submitting} tip="Submitting...">
          <h1 className="center">{caption}</h1>
          <Field
            name="email"
            hasFeedback
            component={renderInput}
            disabled={submitting || !isNew}
            label={formatMessage(Message.labelEmail)}
            placeholder={formatMessage(Message.placeholderEmail)}
          />
          <Field
            hasFeedback
            name="name"
            component={renderInput}
            disabled={submitting}
            label={formatMessage(Message.labelName)}
            placeholder={formatMessage(Message.placeholderName)}
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
          {isNew && (
            <Field
              hasFeedback
              type="password"
              name="confirmPassword"
              component={renderInput}
              label={formatMessage(Message.labelConfirmPassword)}
              placeholder={formatMessage(Message.placeholderConfirmPassword)}
            />
          )}
          <Field
            hasFeedback
            name="gender"
            options={genders}
            defaultValue="other"
            disabled={submitting}
            component={renderSelect}
            label={formatMessage(Message.labelGender)}
            placeholder={formatMessage(Message.placeholderGender)}
          />
          <Field
            hasFeedback
            name="role"
            options={roles}
            defaultValue="user"
            disabled={submitting}
            component={renderSelect}
            label={formatMessage(Message.labelRole)}
            placeholder={formatMessage(Message.placeholderRole)}
          />
          <div className="center">
            <Button
              type="primary"
              htmlType="submit"
              className="btn-submit"
              disabled={submitting}
            >
              Save
            </Button>
          </div>
        </Spin>
      </Form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.get('email')) {
    errors.email = "Email can't be blank";
  } else if (!validator.isEmail(values.get('email'))) {
    errors.email = 'Email is invalid';
  }

  if (values.get('id') === 'is-new') {
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
  }

  if (!values.get('name')) {
    errors.name = "Name can't be blank";
  }

  return errors;
};

UserForm.propTypes = {
  isNew: PropTypes.bool,
  caption: PropTypes.object,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  formatMessage: PropTypes.func,
};

export default reduxForm({
  form: 'user-form',
  enableReinitialize: true,
  validate,
})(withIntl(UserForm));
