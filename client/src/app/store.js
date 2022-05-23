import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../features/auth/authSlice';
import chatSlice from '../features/chat/ChatSlice';
import HomeReducer from '../features/home/homeSlice';
import userReducer from '../features/user/profileSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    auth: AuthReducer,
    home: HomeReducer,
    chat: chatSlice.reducer,
    user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
