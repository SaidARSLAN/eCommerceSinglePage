import React, { useContext, useState } from 'react'
import GlobalContext from '../context/MainContext';
import AddItem from './AddItem';

const ItemCard = ({item}) => {
    const [editControl, setEditControl] = useState(false);
    const {sendDeletedItem} = useContext(GlobalContext)
    const handleDelete = () => {
        sendDeletedItem(item.id);
    }

    const handleEdit = () => {
        setEditControl(true);
    }

    const handleSuccessEdit = () => {
        console.log("Editted Successfull");
        setEditControl(false);
    }
    return (
    <div>
        {editControl ?  <form className='flex flex-col space-y-4 w-full'>
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
            <button className='bg-green-600 text-white px-6 text-lg py-2 font-roboto' onClick={handleSuccessEdit}>Edit</button>
            </div>
        </form>:
        <div className='flex flex-col items-center justify-center w-full text-center border-2 shadow-2xl py-4 lg:text-left'>
        <div className='flex w-full justify-end px-4 py-2 space-x-4'>
            <button className='bg-purple-400 px-4 py-2 text-white' onClick={handleEdit}>E</button>
            <button className='bg-red-600 px-4 py-2 text-white' onClick={handleDelete}>D</button>
        </div>
        <img src={item.image} className='w-40'/>
        <div className='flex flex-col items-center justify-center space-y-4 px-4 py-4 lg:items-start'>
            <h3 className='font-roboto text-xl'>{item.title}</h3>
            <p className='font-sans text-sm'>{item.description}</p>
            <p className='font-roboto bg-gray-200 px-2 py-2'>{item.category}</p>
            <button className='bg-yellow-600 text-white font-roboto px-4 py-2 text-sm hover:bg-yellow-900 duration-200'>Add {item.price}$</button>
        </div> 
        </div>
        }
    </div>
        
    
        
  )
}

export default ItemCard