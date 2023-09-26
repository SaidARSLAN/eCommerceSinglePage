import React from 'react'

const AddItem = () => {
  return (
    <div className='w-full h-0 overflow-hidden duration-200' id='add-item'>
        <form className='flex flex-col space-y-4 w-full'>
            <input className='border-2 px-4 py-2 font-roboto' placeholder='Product Name'></input>
            <textarea className='border-2 px-4 p-2 font-roboto' rows={5} placeholder='Product Description'></textarea>
            <select className='border-2 font-roboto px-2 py-2'>
                <option>men's clothing</option>
                <option>jewelery</option>
                <option>electronics</option>
                <option>women's clothing</option>
            </select>
            <div className='w-full  flex justify-between items-center'>
            <input className='border-2 w-1/3 px-4 py-2' placeholder='$'></input>
            <button className='bg-yellow-400 px-6 text-lg py-2 font-roboto'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddItem