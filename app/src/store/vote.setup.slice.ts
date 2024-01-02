import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: {
    id: '',
    title: '',
    photoUrl: '',
    description: '',
  },
  mode: 'add',
};

const voteSetupSlice = createSlice({
  name: 'voteSetup',
  initialState,
  reducers: {
    setForm: (state, action) => {
      const value = action.payload.value;
      if (action.payload.key === 'title') {
        state.form.title = value;
      } else if (action.payload.key === 'photoUrl') {
        state.form.photoUrl = value;
      } else if (action.payload.key === 'description') {
        state.form.description = value;
      } else if (action.payload.key === 'id') {
        state.form.id = value;
      }
    },
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    resetForm: (state) => {
      state.form = { ...initialState.form };
    },
  },
});

export const { setForm, setMode, resetForm } = voteSetupSlice.actions;

export default voteSetupSlice.reducer;
