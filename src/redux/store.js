import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { auth, news } from './slices';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['accessToken', 'news']
};

const rootReducer = combineReducers({
  authState: auth,
  newsState: news
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
