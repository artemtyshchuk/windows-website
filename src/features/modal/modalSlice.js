import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalIsOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal : (state, action) => {
            state.modalIsOpen = true
        },
        closeModal : (state, action) => {
            state.modalIsOpen = false
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer