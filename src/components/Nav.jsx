import React from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
import { logo } from '../contains'
const Nav = () => {


  const handleShop = () => {
    const overlay = document.querySelector("#overlay");
    const card = document.querySelector("#overlay-card");
    overlay.classList.add("open-overlay");
    card.classList.add("open");
  }

  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} />
        </div>
        <div className='navbar-menu'>
        <div className='nav-menu'>
            <a href='/'>Categories</a>
            <a href='/'>Product Page</a>
        </div>
        <div className='navbar-shopping' onClick={handleShop}>
                <AiOutlineShoppingCart size={25}/>
        </div>
        <div className='navbar-hamburger'>
            <AiOutlineMenu size={25}/>
        </div>
        
        </div>
    </nav>
  )
}

export default Nav