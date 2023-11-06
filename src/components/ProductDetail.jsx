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
    <div>
        <img src={product && product.image} />
        <p>{product && product.title}</p>
        <p>{product && product.price}</p>
    </div>
  )
}

export default ProductDetail