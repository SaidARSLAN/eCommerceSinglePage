import React from 'react'
import { furniture,kitchen,electronics,skincare } from '../contains'
const Hero = () => {
  return (
    <section className='hero-page'>
        <div className='hero-image'>
        <img src={furniture} />
        <h1>Live Comfortable</h1>
        </div>
        <div className='hero-image'>
        <img src={skincare} />
        <h1>Skincare</h1>
        </div>
        <div className='hero-image'>
        <img src={kitchen} />
        <h1>Kitchen</h1>
        </div>
        <div className='hero-image'>
        <img src={electronics} />
        <h1>Electronics</h1>
        </div>
    </section>
  )
}

export default Hero