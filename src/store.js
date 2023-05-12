'use strict';

import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

let store;

const initStore = {
 phoneNo: ''

};

if (!store) {
 store = configureStore(reducer, initStore)
}

export { store };

