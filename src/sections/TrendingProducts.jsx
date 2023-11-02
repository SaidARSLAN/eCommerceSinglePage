import React from 'react'
import {BiRightArrow} from 'react-icons/bi';
import {BiLeftArrow} from 'react-icons/bi'
const TrendingProducts = () => {
  return (
    <section className='trending-products'>
        <div className='trending-header'>
            <h1>Trending Now</h1>
            <div className='buttons'>
                <button><BiLeftArrow color='white' size={25}/></button>
                <button><BiRightArrow color='white' size={25} /></button>
            </div>
        </div>
    </section>
  )
}

export default TrendingProducts