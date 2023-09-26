import React from 'react'

const ItemCard = ({item}) => {
    console.log(item)
  return (
    <div className='border-[1px] flex flex-col items-start shadow-xl'>
        <div className='flex w-full items-center justify-center'>
        <img src={item.image} className='w-40 lg:w-60 py-6' />
        </div>
        <div className='px-4 py-4'>
        <h3 className='font-roboto text-xl py-2'>{item.title}</h3>
        <h1 className='text-yellow-700 font-roboto py-1'>{item.price} $</h1>
        <p className='font-sans text-sm py-2'>{item.description}.</p>
        <p className='font-roboto text-xs'>{item.category}</p>
        </div>
    </div>
  )
}

export default ItemCard