import { configureStore } from '@reduxjs/toolkit';

import glazing from '../components/glazing/glazingSlice';
import calculator from '../components/calculator/calculatorSlice';
import clients from '../components/formCard/formSlice';

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}



const store = configureStore({ //через toolkit
    reducer: {clients, glazing, calculator},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production', // если продакшн то активен, если нет то нет
})

export default store;