import React from 'react'
import ItemCard from './ItemCard'

const ItemList = ({itemList}) => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
        {itemList.map((item) => {
            return (<ItemCard key={item.id} item={item} />)
        })}
    </div>
  )
}

export default ItemList