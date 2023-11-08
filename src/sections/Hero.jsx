import React from 'react'
import { furniture,kitchen,electronics,skincare } from '../contains'
const Hero = () => {


  return (
    <section className='hero-page'>
      <div className='first-section'>
      <div className='hero-first'>
        <img src={furniture} />
        <h1>Live Comfortable</h1>
      </div>
      <div className='hero-second'>
        <img src={skincare} />
        <h1>Skincare</h1>
      </div>
      </div>
      <div className='second-section'>

        <div className='hero-third'>
        <img src={kitchen} />
        <h1>Kitchen</h1>
        </div>
        <div className='hero-four'>
        <img src={electronics} />
        <h1>Electronics</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero