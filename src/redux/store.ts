import { createStore, combineReducers, applyMiddleware } from "redux";
import QuoteReducer from "./quote/reducer";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const combinedReducer = combineReducers({
  quote: QuoteReducer,
});
const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
