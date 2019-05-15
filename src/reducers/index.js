import { BLOOD_TYPE_B } from "../constants/processors";

const initialState = {type: BLOOD_TYPE_B, text: ""};

const reducer = (state = initialState, action) => {
  const newState = {...state};
  newState.text = action.text;
  return newState;
};

export default reducer;