import { ADD_TEXT, ADD_PIC, LOADING } from './actions';

export default function (state, action) {
  switch (action.type) {
    case ADD_TEXT:
      return { ...state, word: action.payload };
    case ADD_PIC:
      return { ...state, pic: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
}
