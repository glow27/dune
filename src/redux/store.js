import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const initialState = {word: '', pic: null, loading: true};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
