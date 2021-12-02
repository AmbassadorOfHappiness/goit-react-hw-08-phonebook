import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices';
import { 
    persistStore, 
    persistReducer, 
    FLUSH, 
    REGISTER, 
    PAUSE, 
    REHYDRATE,
    PERSIST,
    PURGE
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//===== 
import { contactApiSlice } from './slices';
//======
const authPersistConfig = { 
    key: "authToken",
    storage,
    whitelist: ["token"],
}
const authPersistReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
    reducer: {
        auth: authPersistReducer,
        [contactApiSlice.reducerPath]: contactApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [ FLUSH, REGISTER, PAUSE, REHYDRATE, PERSIST, PURGE ],
        },
    }).concat(contactApiSlice.middleware),
});

export const persistor = persistStore(store);