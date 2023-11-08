import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products, { fetchProducts } from '../store/products';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM } from '../store/shop';
import {motion, useAnimation} from 'framer-motion'
const ProductDetail = () => {



  const [control, setControl] = useState(false)
  const [quantity, setQuantity] = useState(0);
    const [product, setProduct] = useState("")
    const products = useSelector(state => state.products.products);
    const {url} = useParams();
    const modalControls = useAnimation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    },[])
    useEffect(() => {
        const productDetect = products.find((product) => product.id === parseInt(url,10))
        setProduct(productDetect);
    },[products,url]) 

    const handleDecrease = () => {
      if (quantity > 0) {
        setQuantity((currQuantity) => currQuantity - 1)
      } 
    }
    const handleIncrease = () => {
      setQuantity((currQuantity) => currQuantity + 1)
    }
    const handleBuy  = () => {
      setControl(true)
      dispatch(ADD_ITEM({
        image: product.image,
        title:product.title,
        quantity : quantity,
        price : product.price,
      }))
      modalControls.start({ opacity: 1, y: 0 });
      setTimeout(() => {
        modalControls.start({ opacity: 0, y: -100 });
      },1000)
    }
  return (
      <div className='product-detail'>
        <img src={product && product.image} />
        <h1>{product && product.title.split(" ").slice(0,4).join(" ")}</h1>
        <div className='product-buy'>
        <p>{product && product.description}</p>
        <div className='product-price' style={control ? {display:"none"} : {}}>
          <p>Quantity : {quantity}</p>
          <div className='buttons'>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncrease}>+</button>
          </div>
        <p>{product && (quantity* product.price).toString().slice(0,5)} $</p>
        </div>
        <div className='buy-section'>
        <button onClick={handleBuy} disabled={control}>{control ? "Added" :  "Add"}</button>
        </div>
        </div>
        <motion.div className='modal' initial={{opacity:0,y: -100}} animate={modalControls} transition={{type:"spring"}}>
              <p>Product has been added</p>
        </motion.div>
    </div>
  )
}

export default ProductDetail