import { createSlice } from '@reduxjs/toolkit';
import { closeCalculator } from '../glazing/glazingSlice';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        isCalculatorClose: true
    },
    reducers: {
        closeCalculatorInCalculatorSlice(state) {
            state.isCalculatorClose = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(closeCalculator, (state) => {
            state.isCalculatorClose = true;
        });
    },
});

const {actions, reducer} = calculatorSlice;
export default reducer

export const {
    closeCalculatorInCalculatorSlice
} = actions

// export const { closeCalculatorInCalculatorSlice } = calculatorSlice.actions;
// export default calculatorSlice.reducer;