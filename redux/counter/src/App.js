// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;

