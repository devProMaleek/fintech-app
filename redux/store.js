import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './slices/authenticationSlice';
import profileTabReducer from './slices/UI/profileTabSlice';

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  profileTab: profileTabReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
