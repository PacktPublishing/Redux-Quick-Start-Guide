import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLanguage = state => state.get('language', initialState);

const makeSelectLocale = () =>
  createSelector(selectLanguage, languageState => languageState.get('locale'));

export { selectLanguage, makeSelectLocale };
