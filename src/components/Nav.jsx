import React from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <h1>LOGO</h1>
        </div>
        <div className='navbar-shopping'>
                <AiOutlineShoppingCart size={30}/>
        </div>
        <div className='navbar-hamburger'>
            <AiOutlineMenu size={30}/>
        </div>
    </nav>
  )
}

export default Nav