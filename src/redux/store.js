import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './slices/auth';
import newsReducer from './slices/news';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authState', "newsState"]
};

const reducers = combineReducers({
  authState: authReducer,
  newsState: newsReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor = persistStore(store);
