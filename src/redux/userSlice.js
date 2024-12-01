import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Initially no user logged in
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload; // Set user data (token, etc.)
    },
    clearUserData: (state) => {
      state.user = null; // Reset user data on logout
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;