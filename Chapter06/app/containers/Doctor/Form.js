import React from 'react';
import PropTypes from 'prop-types';
import { Form, Spin } from 'antd';
import { FormattedHTMLMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form/immutable';
import renderInput from 'components/Form/Fields/search';
import withIntl from 'utils/withIntl';
import Message from './messages';

import './style.css';

const SearchForm = props => {
  const { handleSubmit, submitting, formatMessage } = props;

  return (
    <Form onSubmit={handleSubmit} className="form-doctor-containers">
      <Spin spinning={submitting} tip="Submitting...">
        <h1 className="center">
          <FormattedHTMLMessage {...Message.header} />
        </h1>
        <Field
          name="s"
          hasFeedback
          disabled={submitting}
          component={renderInput}
          placeholder={formatMessage(Message.placeholder)}
        />
      </Spin>
    </Form>
  );
};

SearchForm.propTypes = {
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  formatMessage: PropTypes.func,
};

export default reduxForm({
  form: 'search-form',
  enableReinitialize: true,
})(withIntl(SearchForm));
