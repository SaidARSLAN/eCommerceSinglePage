import React from 'react'

const ItemCard = ({item}) => {
    console.log(item)
  return (
    <div className='flex flex-col items-center justify-center w-full text-center border-2 shadow-2xl py-4 lg:text-left'>
        <img src={item.image} className='w-40'/>
        <div className='flex flex-col items-center justify-center space-y-4 px-4 py-4 lg:items-start'>
            <h3 className='font-roboto text-xl'>{item.title}</h3>
            <p className='font-sans text-sm'>{item.description}</p>
            <p className='font-roboto bg-gray-200 px-2 py-2'>{item.category}</p>
            <button className='bg-yellow-600 text-white font-roboto px-4 py-2 text-sm hover:bg-yellow-900 duration-200'>Add {item.price}$</button>
        </div>
    </div>
        
  )
}

export default ItemCard