import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { mainSlice } from './mainSlice';

export const store = configureStore({
    reducer: {
        [mainSlice.reducerPath]: mainSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainSlice.middleware)
});

setupListeners(store.dispatch);