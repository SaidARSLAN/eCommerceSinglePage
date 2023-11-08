import React from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
import { logo } from '../contains'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Nav = () => {


  const handleShop = () => {
    const overlay = document.querySelector("#overlay");
    overlay.classList.add("open");
  }
  const shops = useSelector(state => state.shop.shops)
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