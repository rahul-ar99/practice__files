// store.js
// import {legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers';

// const store = createStore(counterReducer);
const store = configureStore({
    reducer:counterReducer
});

export default store;