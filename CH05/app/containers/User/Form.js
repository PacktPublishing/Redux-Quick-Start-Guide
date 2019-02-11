import React from 'react';
import PropTypes from 'prop-types';
import { Form, Spin } from 'antd';
import { Field, reduxForm } from 'redux-form/immutable';
import renderInput from 'components/Form/Fields/search';

import './style.css';

const SearchForm = props => {
  const { handleSubmit, submitting } = props;

  return (
    <Form onSubmit={handleSubmit} className="form-user-containers">
      <Spin spinning={submitting} tip="Submitting...">
        <h1 className="center">Search User</h1>
        <Field
          name="s"
          hasFeedback
          disabled={submitting}
          component={renderInput}
          placeholder="Search"
        />
      </Spin>
    </Form>
  );
};

SearchForm.propTypes = {
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'search-form',
  enableReinitialize: true,
})(SearchForm);
