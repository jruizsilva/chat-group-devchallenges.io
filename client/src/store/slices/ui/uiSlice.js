import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMenu: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleShowMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
    closeMenu: (state) => {
      state.showMenu = false;
    },
  },
});

export const { toggleShowMenu, closeMenu } = uiSlice.actions;
