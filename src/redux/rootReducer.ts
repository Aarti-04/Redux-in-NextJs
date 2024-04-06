import { combineReducers } from "redux";

// import slices
import mainSliceReducer from "./slice/mainSlice";

const rootReducer = combineReducers({
  cards: mainSliceReducer,
});

export default rootReducer;
