import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
        <div className='product-image'>
        <img src={product.image} />
        </div>
        <div className='product-description'>
        <h5>{product.title}</h5>
        <p><strong>{product.price} $</strong></p>
        </div>
    </div>
  )
}

export default Product