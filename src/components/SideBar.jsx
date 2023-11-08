import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ShopCard } from './ShopCard';
import { COMPLETE_ORDER } from '../store/shop';
const SideBar = () => {
  const dispatch = useDispatch();
  window.addEventListener("click", (event) => {
    const overlay = document.querySelector("#overlay");
  
    if (event.target.classList[0] === "overlay") {
      overlay.classList.remove("open");
    }
  })
  const shops = useSelector(state => state.shop.shops)
  const total = useSelector(state => state.shop.total)
  const handleClick = () => {                  
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("open")
  }
  const handleComplete = () => {
    dispatch(COMPLETE_ORDER());
  }
  return (
    <div className='overlay' id='overlay' >
      <div className='side-card' style={shops.length ? {rowGap:'2rem'} : {} } id='overlay-card'>
        <div className='header'>
          <h1>Your Shopping Card {total.toString().slice(0,5)} $</h1>
          <button onClick={handleClick}>X</button>
        </div>
        {shops.length > 0  ? <div>{shops.map((shop) => {
          return <ShopCard shop={shop} total={total}/>
        })}</div>:<div className='body'>
          <h3>Your cart is emtpy</h3>
          <button onClick={handleClick}>Keep Browsing</button>
        </div> }
      </div>
      <div className='complete-order' onClick={handleComplete}>{shops.length > 0 ? <button>Complete Order</button> : <></>}</div>

    </div>
  )
}

export default SideBar