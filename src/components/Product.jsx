import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';
const cutProductTitle = (title) => {
    return title.split(" ").slice(0,2).join(" ");
}



const Product = ({product}) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('product/'+product.id)
  }


  return (
    <motion.div className='product' initial={{x:1000}} animate={{x:0}} onClick={handleClick}>
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