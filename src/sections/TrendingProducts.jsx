import React, { useEffect, useReducer, useState } from 'react'
import {BiRightArrow} from 'react-icons/bi';
import {BiLeftArrow} from 'react-icons/bi'
import {useSelector} from 'react-redux'
import Product from '../components/Product';


const TrendingProducts = () => {

    const products = useSelector((state) => state.products.products);
    const [step, setStep] = useState(0)
    const [trends, setTrends] = useState([])
    useEffect(() => {
        setTrends(products.slice(step,step+2));
    },[step,products])


    const handleBack = () => {
        if (step > 0 ) {
            setStep((currStep) => currStep - 1)
        }
    }

    const handleNext = () => {
        if (step < products.length - 2) {
            setStep((currStep) => currStep + 1);
        }
    }
    
  return (
    <section className='trending-products'>
        <div className='trending-header'>
            <h1>Trending Now</h1>
            <div className='buttons'>
                <button onClick={handleBack}><BiLeftArrow color='white' size={25}/></button>
                <button onClick={handleNext}><BiRightArrow color='white' size={25}/></button>
            </div>
        </div>
        <motion className='trending-list'>
            {trends.map((trend) => {
                return <Product product={trend}/>
            })}
        </motion>
    </section>
  )
}

export default TrendingProducts