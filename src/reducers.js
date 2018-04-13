import { combineReducers } from 'redux';
import update from 'immutability-helper';

const feed = (state, action) => {
  switch (action.type) {
    case 'FEED_SET':
      return update(state, {
        $set: action.payload,
      });

    default:
      return state || null;
  }
};

const reducers = combineReducers({
  feed,
});

export default reducers;
