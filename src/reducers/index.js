// Main processor API
import processText from "../processors";

// Constants
import { BLOOD_TYPE_B } from "../constants/processors";
import { CHANGE, GENERATE } from "../constants/actions";

// Initial reducer state
const initialState = {type: BLOOD_TYPE_B, text: "", processor: BLOOD_TYPE_B, transformedText: ""};

const reducer = (state = initialState, action) => {
  // Duplicate state
  const dupState = {...state};

  switch (action.type) {

    // Generate text
    case GENERATE:
      const newText = action.text;

      dupState.text = newText;

      dupState.transformedText = !newText.trim() ? "" : processText(state.processor)(newText);

      return dupState;

    // Hot swap processor
    case CHANGE:
      const newProcessor = action.processor;
      const text = dupState.text;

      dupState.processor = newProcessor;

      dupState.transformedText = !text.trim() ? "" : processText(newProcessor)(text);

      return dupState;

    default:
      return dupState;
  }
};

export default reducer;