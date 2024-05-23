import { ReducerType, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@app/store/entities/auth/authSlice";
import { articlesReducer } from "@app/store/entities/articles/articlesSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        articles: articlesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
