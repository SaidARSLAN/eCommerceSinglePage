import React from 'react'
import {motion} from 'framer-motion'
const cutProductTitle = (title) => {
    return title.split(" ").slice(0,2).join(" ");
}



const Product = ({product}) => {
  return (
    <motion.div className='product' initial={{x:100}} animate={{x:0}}>
        <div className='product-image'>
        <img src={product.image} />
        </div>
        <div className='product-description'>
        <h5>{cutProductTitle(product.title)}</h5>
        <p><strong>{product.price} $</strong></p>
        </div>
    </motion.div>
  )
}

export default Product