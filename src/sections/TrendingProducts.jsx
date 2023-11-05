import React, { useEffect, useReducer, useState } from 'react'
import {BiRightArrow} from 'react-icons/bi';
import {BiLeftArrow} from 'react-icons/bi'
import {useSelector} from 'react-redux'



const TrendingProducts = () => {

  const products = useSelector((state) => state.products.products)
  const [step, setStep] = useState(0);
  const [firstProducts, setFirstProducts] = useState([]);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  useEffect(() => {
      const handleResize  = () => {
        setCurrentWidth(window.innerWidth);
      }
      window.addEventListener('resize',handleResize);
      return () => {
        window.removeEventListener('resize',handleResize)
      }
  },[])
  const handleNext = () => {
    if (step < products.length  - firstProducts.length) {
      setStep((step) => step += 1); 
    }
  }
  const handleBack = () => {
    if (step > 0) {
      setStep((step) => step -= 1);
    }
  }
  useEffect(() => {
    if (currentWidth > 1000) {
      setFirstProducts(products.slice(0+step,5+step))
    }
    else {
      setFirstProducts(products.slice(0+step,2+step))
    }
  },[step,products,currentWidth])
  return (
    <section className='trending-products'>
        <div className='trending-header'>
            <h1>Trending Now</h1>
            <div className='buttons'>
                <button onClick={handleBack}><BiLeftArrow color='white' size={25}/></button>
                <button onClick={handleNext}><BiRightArrow color='white' size={25}/></button>
            </div>
        </div>
        <div className='trending-body'>
          {firstProducts.map((product) => {
            return <div>
              <img src={product.image} />
              <p>{product.title}</p>
              </div>
          })}
        </div>
    </section>
  )
}

export default TrendingProducts