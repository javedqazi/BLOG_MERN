import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});
const persistConfiq = {
  key: "root",
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfiq, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getdefaultmiddleware) =>
    getdefaultmiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
