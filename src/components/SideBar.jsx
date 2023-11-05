import React from 'react'

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
    <div className='overlay' id='overlay'>
      <div className='side-card' id='overlay-card'>
          <h1>Side Card</h1>
      </div>

    </div>
  )
}

export default SideBar