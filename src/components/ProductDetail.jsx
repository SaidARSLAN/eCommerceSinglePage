import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products, { fetchProducts } from '../store/products';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0);
    const [product, setProduct] = useState("")
    const products = useSelector(state => state.products.products);
    const {url} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    },[])
    useEffect(() => {
        const productDetect = products.find((product) => product.id === parseInt(url,10))
        setProduct(productDetect);
        console.log(product)
    },[products,url])

    const handleDecrease = () => {
      if (quantity > 0) {
        setQuantity((currQuantity) => currQuantity - 1)
      } 
    }
    const handleIncrease = () => {
      setQuantity((currQuantity) => currQuantity + 1)
    }

  return (
      <div className='product-detail'>
        <img src={product && product.image} />
        <h1>{product && product.title.split(" ").slice(0,4).join(" ")}</h1>
        <div className='product-buy'>
        <p>{product && product.description}</p>
        <div className='product-price'>
          <p>Quantity : {quantity}</p>
          <div className='buttons'>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
          </div>
        <p>{product && (quantity* product.price).toString().slice(0,5)} $</p>
        </div>
        </div>
    </div>
  )
}

export default ProductDetail