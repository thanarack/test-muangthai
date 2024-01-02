import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: '',
  role: '',
  isAuth: false,
  name: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isAuth = true;
      state.name = action.payload.name
    },
    setLogout: (state) => {
      state.id = '';
      state.email = '';
      state.role = '';
      state.isAuth = false;
      state.name = ''
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
