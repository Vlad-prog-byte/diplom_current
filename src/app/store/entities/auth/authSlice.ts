import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchAuth, fetchLogout } from "@shared/services/auth/authApi";
import { AuthResponse } from "@shared/types/auth/authTypes";
export interface IAuthState {
    isInit: boolean
}

const initialState: IAuthState = {
    isInit: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchAuth.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            if (action.payload.status === "Success")
                state.isInit = true;
            else
                state.isInit = false;
        });
        builder.addCase(fetchAuth.rejected, (state) => {
            state.isInit = false;
        });
        builder.addCase(fetchLogout.fulfilled, (state, action) => {
            state.isInit = false;
        });
    },
})

export const {actions: authActions, reducer: authReducer} = authSlice;