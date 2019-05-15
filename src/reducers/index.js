// Main processor API
import process from "../processors";

// Constants
import { BLOOD_TYPE_B } from "../constants/processors";
import { CHANGE, GENERATE } from "../constants/actions";

// Initial reducer state
const initialState = {type: BLOOD_TYPE_B, text: "", processor: BLOOD_TYPE_B, transformedText: ""};

const reducer = (state = initialState, action) => {
  // Duplicate state
  const newState = {...state};

  switch (action.type) {

    // Generate text
    case GENERATE:
      const newText = action.text;

      newState.text = newText;
      newState.transformedText = process(newText, state.processor);

      return newState;

    // Hot swap processor
    case CHANGE:
      const newProcessor = action.processor;

      newState.processor = newProcessor;
      newState.transformedText = process(newState.text, newProcessor);

      return newState;

    default:
      return newState;
  }
};

export default reducer;