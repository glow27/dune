import {ADD_TEXT} from './actions';

export default function(state, action) {
  switch (action.type) {
    case ADD_TEXT:
      return action.payload;
  
    default:
      return state;
  }
}
