import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products, { fetchProducts } from '../store/products';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
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

  return (
      <div className='product-detail'>
        <img src={product && product.image} />
        <h1>{product && product.title.split(" ").slice(0,4).join(" ")}</h1>
        <div className='product-buy'>
        <p>{product && product.description}</p>
        <p>{product && product.price}</p>
        </div>
    </div>
  )
}

export default ProductDetail