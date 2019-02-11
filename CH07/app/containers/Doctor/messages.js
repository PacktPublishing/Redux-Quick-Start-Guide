import { defineMessages } from 'react-intl';

export const scope = 'moment.containers.doctor';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Search doctor',
  },
  placeholder: {
    id: `${scope}.placeholder`,
    defaultMessage: 'Enter doctor name',
  },
});
