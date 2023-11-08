import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
const SideBar = () => {
  const [total, setTotal] = useState(0)
  window.addEventListener("click", (event) => {
    const overlay = document.querySelector("#overlay");
  
    if (event.target.classList[0] === "overlay") {
      overlay.classList.remove("open");
    }
  })
  const shops = useSelector(state => state.shop.shops)
  useEffect(() => {
    const result = shops.reduce((state,currValue) => {
      return state + currValue.price
    },0)
    setTotal(result)
    console.log(shops)
  },[shops])
  const handleClick = () => {
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("open")
  }
  return (
    <div className='overlay' id='overlay' >
      <div className='side-card' style={shops.length ? {rowGap:'2rem'} : {} } id='overlay-card'>
        <div className='header'>
          <h1>Your Shopping Card {total}</h1>
          <button onClick={handleClick}>X</button>
        </div>
        {shops.length > 0  ? <div>{shops.map((shop) => {
          return <div className='shop-card'>
            <img src={shop.image} />
            <h1>{shop.title}</h1>
            <h1>{shop.quantity}</h1>
            <div className='buttons'>
              <button>+</button>
              <button>-</button>
            </div>
            </div>
        })}</div>:<div className='body'>
          <h3>Your cart is emtpy</h3>
          <button onClick={handleClick}>Keep Browsing</button>
        </div> }
        
      </div>

    </div>
  )
}

export default SideBar