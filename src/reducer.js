import { PHONENO_POST_CODE } from "./actions";
import { PHONENO_POST_CODE_CLEAR } from "./actions";
function reducer(state, action) {
 if (action.type === PHONENO_POST_CODE) {
  return { ...state, phoneNo: action.payload }
 }
 if (action.type === PHONENO_POST_CODE_CLEAR) {
  return { ...state, phoneNo: '' }
 }

 return state;
}

export default reducer;