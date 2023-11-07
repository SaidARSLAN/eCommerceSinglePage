import React, { useEffect } from 'react'
import { fetchProducts } from '../store/products'
import {useDispatch,useSelector} from 'react-redux'
import Product from '../components/Product';
import { useRef } from 'react';
import {useScroll,motion} from 'framer-motion'
const BestProducts = () => {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products.products)


   useEffect(() => {
        dispatch(fetchProducts());
   },[]);

   const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["0 1", "0.8 1"]
  })


  return (
    <motion.section className='best-products' ref={ref} style={{scale:scrollYProgress, opacity:scrollYProgress}}>
        <h1>Products we are proud of</h1>
        <div className='product-list'>
        {products.slice(8,16).map((product,index) => {
            return <Product product={product}/>
        })}
        </div>
    </motion.section>
  )
}

export default BestProducts