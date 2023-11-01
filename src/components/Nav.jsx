import React from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <h1>LOGO</h1>
        </div>
        <div className='navbar-menu'>
        <div className='navbar-shopping'>
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