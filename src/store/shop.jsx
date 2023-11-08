import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    shops : [],
} 

const shops = createSlice({
    name:"shops",
    initialState,
    reducers : {
        ADD_ITEM : (state,action) => {
            state.shops = [...state.shops,action.payload];
        }
    }
})

export const {ADD_ITEM} = shops.actions;

export default shops.reducer;