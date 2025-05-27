import { createSlice } from '@reduxjs/toolkit';

const userInfo = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userInfo,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
