import React, { useEffect, useReducer, useState } from 'react'
import {BiRightArrow} from 'react-icons/bi';
import {BiLeftArrow} from 'react-icons/bi'
import products, { fetchProducts } from '../store/products'
import {useDispatch,useSelector} from 'react-redux'
import Product from '../components/Product';

const initialState = {
    from : 0,
    to : 1
}

const reducer = (state,action) => {
    switch(action) {
        case "BACK":
            if (state.from > 0) {
                state.from -= 1
                state.to -= 1
            }
            return state
        case "NEXT":
            if (state.to < 8){
                state.from += 1
                state.to += 1
            }
            
            return state
        default:
            console.log("ERROR!")
    }
}

const TrendingProducts = () => {

    const products = useSelector((state) => state.products.products)
    const [product,dispatch] = useReducer(reducer,initialState)
    console.log(product);
  return (
    <section className='trending-products'>
        <div className='trending-header'>
            <h1>Trending Now</h1>
            <div className='buttons'>
                <button  onClick={() => dispatch("BACK")}><BiLeftArrow color='white' size={25}/></button>
                <button onClick={() => dispatch("NEXT")}><BiRightArrow color='white' size={25} /></button>
            </div>
        </div>
        <div className='trending-list'>
            
        </div>
    </section>
  )
}

export default TrendingProducts