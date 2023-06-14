import { createSlice } from '@reduxjs/toolkit';

const glazingSlice = createSlice({
    name: 'glazing',
    initialState: {
        isCalculatorOpen: false,
    },
    reducers: {
        openCalculator(state) {
            state.isCalculatorOpen = true;
        },
        closeCalculator(state) {
            state.isCalculatorOpen = false;
        }
    }
});

const {actions, reducer} = glazingSlice;
export default reducer

export const {
    openCalculator,
    closeCalculator
} = actions

// export const { openCalculator, closeCalculator } = glazingSlice.actions;
// export default glazingSlice.reducer;