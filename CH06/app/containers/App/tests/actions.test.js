import { IS_USER_AUTHENTICATED } from '../constants';

import { onApplicationLoad } from '../actions';

describe('App Actions', () => {
  describe('onApplicationLoad', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: IS_USER_AUTHENTICATED,
      };

      expect(onApplicationLoad()).toEqual(expectedResult);
    });
  });
});
