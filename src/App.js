import React  from 'react';
import {Arrakis} from './components/Arrakis/index';
import store from './redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Arrakis/>
    </Provider>
  );
}

export default App;
