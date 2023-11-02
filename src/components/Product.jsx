import React from 'react'

const cutProductTitle = (title) => {
    return title.split(" ").slice(0,2).join(" ");
}



const Product = ({product}) => {
  return (
    <div className='product'>
        <div className='product-image'>
        <img src={product.image} />
        </div>
        <div className='product-description'>
        <h5>{cutProductTitle(product.title)}</h5>
        <p><strong>{product.price} $</strong></p>
        </div>
    </div>
  )
}

export default Product