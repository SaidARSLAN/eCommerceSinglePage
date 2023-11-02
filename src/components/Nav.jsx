import React from 'react'
import {AiOutlineMenu,AiOutlineShoppingCart} from 'react-icons/ai'
import { logo } from '../contains'
const Nav = () => {




  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} />
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