import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
        <div className='product-image'>
        <img src={product.image} />
        </div>
        <p>{product.title}</p>
        <p><strong>{product.price} $</strong></p>
    </div>
  )
}

export default Product