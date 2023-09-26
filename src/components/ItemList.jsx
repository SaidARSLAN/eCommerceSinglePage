import React, { useContext } from 'react'
import ItemCard from './ItemCard'
import GlobalContext from '../context/MainContext'

const ItemList = () => {
    const {itemList} = useContext(GlobalContext)
    return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        {itemList.map((item) => {
            return (<ItemCard key={item.id} item={item} />)
        })}
    </div>
  )
}

export default ItemList