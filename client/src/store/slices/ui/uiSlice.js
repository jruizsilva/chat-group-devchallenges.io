import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenMenu: false,
  isOpenModal: false,
  isOpenDropdownMenu: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openMenu: state => {
      state.isOpenMenu = true
    },
    closeMenu: state => {
      state.isOpenMenu = false
      state.isOpenDropdownMenu = false
    },
    openModal: state => {
      state.isOpenModal = true
      state.isOpenDropdownMenu = false
    },
    closeModal: state => {
      state.isOpenModal = false
      state.isOpenDropdownMenu = false
    },
    toggleDropdownMenu: state => {
      state.isOpenDropdownMenu = !state.isOpenDropdownMenu
    },
    closeDropdownMenu: state => {
      state.isOpenDropdownMenu = false
    },
  },
})

export const {
  openMenu,
  closeMenu,
  openModal,
  closeModal,
  toggleDropdownMenu,
  closeDropdownMenu,
} = uiSlice.actions
