import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenMenu: false,
  isOpenModal: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
    closeMenu: (state) => {
      state.isOpenMenu = false;
    },
    openModal: (state) => {
      state.isOpenModal = true;
    },
    closeModal: (state) => {
      state.isOpenModal = false;
    },
  },
});

export const { openMenu, closeMenu, openModal, closeModal } = uiSlice.actions;
