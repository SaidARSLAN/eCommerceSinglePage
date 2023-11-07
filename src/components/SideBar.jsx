import React from 'react'
import {motion} from 'framer-motion';
const SideBar = () => {
  window.addEventListener("click", (event) => {
    const overlay = document.querySelector("#overlay");
    const card = document.querySelector("#overlay-card");
  
    if (event.target.classList[0] === "overlay") {
      overlay.classList.remove("open-overlay");
      card.classList.remove("open");
    }
  })
  return (
    <div className='overlay' id='overlay' >
      <motion.div className='side-card' id='overlay-card'>
          <h1>Side Card</h1>
      </motion.div>

    </div>
  )
}

export default SideBar