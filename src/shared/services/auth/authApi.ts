import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@shared/axios';
import { AuthResponse } from '@shared/types/auth/authTypes';
import axios from 'axios';

export const fetchAuth = createAsyncThunk<AuthResponse>('auth/check', async () => {
    const data =  await axiosInstance.get("/check_auth/").then(response => response.data);
    return data;
})

export const fetchLogout = createAsyncThunk('auth/logout', async () => {
    const axiosInstance = axios.create({ baseURL: "http://127.0.0.1:8000/api", withCredentials: true }); 
    const data =  axiosInstance.get("/logout/").then(response => response.data);
})