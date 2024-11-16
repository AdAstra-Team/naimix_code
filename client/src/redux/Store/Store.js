import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../Slices/UserSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Используем localStorage

const persistConfig = {
  key: 'root', // ключ для сохранения состояния
  storage,
};


// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
  // projects: projectReducer,
  // tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore persistence actions
          },
      }),
});



export const persistor = persistStore(store);

