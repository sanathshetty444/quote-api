import { ActionType, QuoteIntialState } from "./type";
import {
  ERROR,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
  HIDE_LOADER,
  SHOW_LOADER,
} from "./types";

const initialState: QuoteIntialState = {
  categories: [],
  selectedCategory: null,
  error: {
    message: "",
  },
  loading: false,
};

const quoteReducer = (
  state = initialState,
  { type, payload }: ActionType
): QuoteIntialState => {
  console.log("payload", payload);

  switch (type) {
    case SHOW_LOADER: {
      return { ...state, loading: true };
    }
    case HIDE_LOADER: {
      return { ...state, loading: false };
    }
    case FETCH_CATEGORIES_SUCCESS: {
      return { ...state, categories: payload, error: initialState.error };
    }
    case FETCH_CATEGORY_SUCCESS: {
      return {
        ...state,
        selectedCategory: payload,
        error: initialState.error,
      };
    }
    case ERROR: {
      return { ...state, error: { message: "Please try again later" } };
    }
    default:
      return state;
  }
};

export default quoteReducer;
