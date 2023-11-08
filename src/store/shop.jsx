import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    shops : [],
    total :0,
} 

const shops = createSlice({
    name:"shops",
    initialState,
    reducers : {
        ADD_ITEM : (state,action) => {
            state.shops = [...state.shops,action.payload];
            state.total = state.shops.reduce((state,currValue) => { return state+(currValue.price * currValue.quantity)},0)
        },
        INCREASE_ITEM : (state,action) => {
            state.shops.map((shop) => {
                if (shop.title === action.payload) {
                    return shop.quantity += 1
                }
            })
            state.total = state.shops.reduce((state,currValue) => { return state+(currValue.price * currValue.quantity)},0)
        },
        DECREASE_ITEM : (state,action) => {
            state.shops.map((shop) => {
                if (shop.title === action.payload) {
                    if (shop.quantity > 0) {
                        return shop.quantity -= 1
                    }
                }
            })
            state.total = state.shops.reduce((state,currValue) => { return state+(currValue.price * currValue.quantity)},0)
        },
        COMPLETE_ORDER : (state,action) => {
            state.shops = [];
            state.total = 0;
        }
    }
})

export const {INCREASE_ITEM,ADD_ITEM,DECREASE_ITEM,COMPLETE_ORDER} = shops.actions;

export default shops.reducer;