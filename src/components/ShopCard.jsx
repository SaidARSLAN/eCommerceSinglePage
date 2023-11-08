import React from 'react'
import { useDispatch } from 'react-redux'
import { DECREASE_ITEM, INCREASE_ITEM } from '../store/shop';

export const ShopCard = (shop) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(INCREASE_ITEM(shop.shop.title));
    }
    const handleDecrease = () => {
        dispatch(DECREASE_ITEM(shop.shop.title))
    }
  return (
    <div className='shop-card'>
            <img src={shop.shop.image} />
            <h1>{shop.shop.title.split(" ").slice(0,4).join(" ")}</h1>
            <h1>{shop.shop.quantity}</h1>
            <div className='buttons'>
              <button onClick={handleClick}>+</button>
              <button onClick={handleDecrease}>-</button>
            </div>
            </div>
  )
}
