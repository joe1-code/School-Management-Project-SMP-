// 'use strict';

// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer';

// let store;

// const initStore = {
//  phoneNo: ''

// };

// if (!store) {
//  store = configureStore(reducer, initStore)
// }

// export { store };


import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Reducer } from './reducer';

const initialStore = {
 phoneNo: ''

}

const storeSlice = createSlice({
 name: 'store',
 initialState: { initialStore },
 reducers: {
  reducerf: Reducer
 }
});


export const { reducerf } = storeSlice.actions;

export const store = configureStore({
 reducer: {
  store: storeSlice.reducer,
 }
});
