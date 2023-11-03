import React, { useEffect, useReducer, useState } from 'react'
import {BiRightArrow} from 'react-icons/bi';
import {BiLeftArrow} from 'react-icons/bi'
import {useSelector} from 'react-redux'





const TrendingProducts = () => {

    const products = useSelector((state) => state.products.products);
    const [step, setStep] = useState(0)
    const [trends, setTrends] = useState(products.slice(step,step+2))
    
    const handleBack = () => {
        if (step > 0 ) {
            setStep((currStep) => currStep - 1)
        }
    }

    const handleNext = () => {
        if (step < products.length - 1) {
            setStep((currStep) => currStep + 1);
        }
    }
    useEffect(() => {
        setTrends(products.slice(step,step+2));
    },[step])
  return (
    <section className='trending-products'>
        <div className='trending-header'>
            <h1>Trending Now</h1>
            <div className='buttons'>
                <button onClick={handleBack}><BiLeftArrow color='white' size={25}/></button>
                <button onClick={handleNext}><BiRightArrow color='white' size={25}/></button>
            </div>
        </div>
        <div className='trending-list'>
            {trends.map((trend) => {
                return <p>{trend.title}</p>
            })}
        </div>
    </section>
  )
}

export default TrendingProducts