import React from 'react'
import {motion} from 'framer-motion';
const SideBar = () => {
  window.addEventListener("click", (event) => {
    const overlay = document.querySelector("#overlay");
    const card = document.querySelector("#overlay-card");
  
    if (event.target.classList[0] === "overlay") {
      overlay.classList.remove("open");
    }
  })
  const handleClick = () => {
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("open")
  }
  return (
    <div className='overlay' id='overlay' >
      <div className='side-card' id='overlay-card'>
        <div className='header'>
          <h1>Your Shopping Card (0)</h1>
          <h3>X</h3>
        </div>
        <div className='body'>
          <h3>Your cart is emtpy</h3>
          <button onClick={handleClick}>Keep Browsing</button>
        </div>
      </div>

    </div>
  )
}

export default SideBar