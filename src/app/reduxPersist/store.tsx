import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose your storage engine
import reducer from "./slice";

const persistConfig = {
  key: "root",
  storage,
  // Specify the reducers you want to persist
  whitelist: ["user"], // In this example, we persist the 'user' reducer
};
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
