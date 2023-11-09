// redux
import { combineReducers, configureStore } from '@reduxjs/toolkit'

// slices
import appSlice from './AppSlice/app.slice';

const rootReducer = combineReducers({
    appSlice
});

export const store = configureStore({
    reducer: rootReducer, middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;