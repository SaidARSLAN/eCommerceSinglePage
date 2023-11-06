import {configureStore} from '@reduxjs/toolkit';
import products from './products';
import categories from './categories';
const store = configureStore({
    reducer : {products,categories},
})

export default store;