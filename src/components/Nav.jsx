import React from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
import { logo } from '../contains'
import { NavLink } from 'react-router-dom'
const Nav = () => {


  const handleShop = () => {
    const overlay = document.querySelector("#overlay");
    const card = document.querySelector("#overlay-card");
    overlay.classList.add("open-overlay");
    card.classList.add("open");
  }

  return (
    <nav className='navbar'>
        <NavLink className='navbar-logo' to='/'>
            <img src={logo} />
        </NavLink>
        <div className='navbar-menu'>
        <div className='nav-menu'>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink href='/'>Product Page</NavLink>
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