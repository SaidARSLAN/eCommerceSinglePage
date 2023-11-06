import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../store/categories';
import { fetchProducts } from '../store/products';
import Product from '../components/Product';
const Categories = () => {
    const products = useSelector(state => state.products.products);
    const categories = useSelector((state) => state.categories.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories());
    },[])
  return (
    <section className='categories'>
        <h1>Title</h1>
        <div className='categories-name'>
            {categories.map((category,idx) => <button key={idx}>{category}</button>)}
        </div>
        <div className='products'>
            {products.map((product) => {
                    return <Product product={product}/>
            })}
        </div>
    </section>
  )
}

export default Categories