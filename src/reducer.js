// import { createSlice } from '@reduxjs/toolkit';
// import { PHONENO_POST_CODE } from "./actions";
// import { PHONENO_POST_CODE_CLEAR } from "./actions";

// const phoneNo = '';

// const myReducer = createSlice({
//  name: 'myReducer',
//  initialState: { phoneNo },
//  reducers: {
//   editPhone: (state, action) => {
//    state.phoneNo = action.phoneNo;
//   }
//  }
// })

// function reducer(state, action) {
//  if (action.type === PHONENO_POST_CODE) {
//   return { ...state, phoneNo: action.payload }
//  }
//  if (action.type === PHONENO_POST_CODE_CLEAR) {
//   return { ...state, phoneNo: '' }
//  }

//  return state;
// }

// export default reducer;




export const Reducer = (state, action) => {
 state.initialStore = { ...state.initialStore, ...action.payload };
 console.log('9999999999999999', state.initialStore)
};