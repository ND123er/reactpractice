// src/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to handle user login
export const loginUserThunk = createAsyncThunk('auth/login', async (loginData) => {
    const response = await axios.post('/api/login', loginData); // API request for login
    return response.data; // Assuming the token is returned in response
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: null,
        token: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null; // Clear token on logout
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUserThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token; // Save the token
            })
            .addCase(loginUserThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Handle error
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;