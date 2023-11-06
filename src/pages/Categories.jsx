import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../store/categories';
import { fetchProducts } from '../store/products';
import Product from '../components/Product';
const Categories = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("All")
    const products = useSelector(state => state.products.products);
    const categories = useSelector((state) => state.categories.categories);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        setFilteredProducts(products);
    },[products])
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories());
    },[])
    const handleClick = (event) => {
        setTitle(event.target.textContent[0].toUpperCase() + event.target.textContent.slice(1));
        if (event.target.textContent !== "All") {
            setFilteredProducts(products.filter((product) => product.category === event.target.textContent))
        }
        else {
            setFilteredProducts(products);
        }
    }
  return (
    <section className='categories'>
        <h1>{title}</h1>
        <nav>
            <button onClick={handleClick}>All</button>
            {categories.map((category,idx) => <button key={idx} onClick={handleClick}>{category}</button>)}
        </nav>
        <div className='products'>
            {filteredProducts.map((product) => {
                    return <Product product={product}/>
            })}
        </div>
    </section>
  )
}

export default Categories