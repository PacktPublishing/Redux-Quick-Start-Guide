import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  currentUser: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  }

  return state;
}

export default appReducer;
