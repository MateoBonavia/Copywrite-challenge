import { REVERSE_WORD } from "./constants";

const initialState = {
  words: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REVERSE_WORD:
      if (state.words.length === 3) {
        state.words.shift();
      }
      return {
        ...state,
        words: [...state.words, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
}
