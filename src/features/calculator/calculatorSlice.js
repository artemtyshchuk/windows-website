import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    calculatorIsOpen: false
}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        openCalculator : (state, action) => {
            state.calculatorIsOpen = true
        },
        closeCalculator : (state, action) => {
            state.calculatorIsOpen = false
        }
    }
})

export const { openCalculator, closeCalculator } = calculatorSlice.actions

export default calculatorSlice.reducer