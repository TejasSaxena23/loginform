import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
// import {persistStore,persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// const persistConfig = {
//   key:"USER_DATA",
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig,userReducer)

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

// export const persistor = persistStore(configureStore)