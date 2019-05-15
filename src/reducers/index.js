// Main processor API
import processText from "../processors";

// Constants
import { BLOOD_TYPE_B } from "../constants/processors";
import { CHANGE, GENERATE } from "../constants/actions";

// Initial reducer state
const initialState = {type: BLOOD_TYPE_B, text: "", processor: BLOOD_TYPE_B, transformedText: ""};

const reducer = (state = initialState, action) => {
  // Duplicate state
  const duplicatedState = {...state};

  switch (action.type) {

    // Generate text
    case GENERATE:
      const newText = action.text;

      duplicatedState.text = newText;
      duplicatedState.transformedText = !newText.trim() ? "" : processText(state.processor)(newText);

      return duplicatedState;

    // Hot swap processor
    case CHANGE:
      const newProcessor = action.processor;
      const text = duplicatedState.text;

      duplicatedState.processor = newProcessor;
      duplicatedState.transformedText = !text.trim() ? "" : processText(newProcessor)(text);

      return duplicatedState;

    default:
      return duplicatedState;
  }
};

export default reducer;