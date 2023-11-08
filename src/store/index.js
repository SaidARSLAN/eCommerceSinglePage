import {configureStore} from '@reduxjs/toolkit';
import products from './products';
import categories from './categories';
import shop from './shop';
const store = configureStore({
    reducer : {products,categories,shop},
})

export default store;