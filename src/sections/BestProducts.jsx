import React, { useEffect } from 'react'
import { fetchProducts } from '../store/products'
import {useDispatch,useSelector} from 'react-redux'
import Product from '../components/Product';
const BestProducts = () => {
   const dispatch = useDispatch();
   const products = useSelector((state) => state.products.products)


   useEffect(() => {
        dispatch(fetchProducts());
        console.log(products);
   },[]);

  return (
    <section className='best-products'>
        <h1>Products we are proud of</h1>
        <div className='product-list'>
        {products.map((product,index) => {
            return <Product product={product}/>
        })}
        </div>
    </section>
  )
}

export default BestProducts