import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products : [],
}

export const fetchProducts = createAsyncThunk('products/fetchProducts',async () => {
    const response = await axios.get("https://fakestoreapi.com/products?limit=6");
    return response.data;
})
const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {},
    extraReducers(builder) {
        builder
        .addCase(fetchProducts.pending,(state,action) => {
            state.status = "loading"
        })
        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.status = "succeded"
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
});
export default productSlice.reducer;