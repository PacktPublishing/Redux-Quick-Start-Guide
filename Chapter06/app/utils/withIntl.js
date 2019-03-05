import React from 'react';
import { intlShape, injectIntl } from 'react-intl';

export const withIntl = Component => {
  const newComponent = props => {
    const args = { ...props };
    args.formatMessage = message => props.intl.formatMessage(message);
    return <Component {...args} />;
  };

  newComponent.propTypes = {
    intl: intlShape.isRequired,
  };

  return injectIntl(newComponent);
};

export default withIntl;
