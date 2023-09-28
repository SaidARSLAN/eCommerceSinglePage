import React, { useContext, useRef, useState } from 'react'
import GlobalContext from '../context/MainContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faRemove, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const ItemCard = ({item}) => {

    const section = useRef();
    const [editControl, setEditControl] = useState(false);
    const [edittedName,setEdittedName] = useState(item.title);
    const [edittedExplanation,setEdittedExplanation] = useState(item.description);
    const [edittedCategory,setEditteCategory] = useState(item.category);
    const [edittedPrice, setEdittedPrice] = useState(item.price);
    const [edittedImg, setEdittedImg] = useState(item.image);
    const [toggle,setToggle] = useState(true);
    const {sendDeletedItem,sendEditedItem} = useContext(GlobalContext)
    const handleOpen = () => {
        setToggle(!toggle);
        if (toggle) {
            section.current.classList.remove("max-h-0");
            section.current.classList.add("max-h-10");
        }
        else {
            section.current.classList.add("max-h-0");
            section.current.classList.remove("max-h-10");
        }
    }

    const handleDelete = () => {
        sendDeletedItem(item.id);
    }

    const handleEdit = () => {
        setEditControl(true);
    }

    const handleSuccessEdit = (event) => {
        event.preventDefault();
        sendEditedItem(item.id,edittedName,edittedExplanation,edittedCategory,edittedPrice,edittedImg);
        setEditControl(false);
        setToggle(true);
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setEdittedImg(reader.result);
            };
            reader.readAsDataURL(selectedFile)
        }
    }
    return (
    <div>
        {editControl ?  <form className='flex flex-col space-y-4 w-full'>
            <input className='border-2 px-4 py-2 font-roboto' placeholder='Product Name' value={edittedName} onChange={e => setEdittedName(e.target.value)}></input>
            <textarea className='border-2 px-4 p-2 font-roboto' rows={5} placeholder='Product Description' value={edittedExplanation} onChange={e => setEdittedExplanation(e.target.value)}></textarea>
            <select className='border-2 font-roboto px-2 py-2' value={edittedCategory} onChange={e => setEditteCategory(e.target.value)}>
                <option>men's clothing</option>
                <option>jewelery</option>
                <option>electronics</option>
                <option>women's clothing</option>
            </select>
            <label>Image</label>
            <input type='file' onChange={handleFileChange}/>
            <div className='w-full  flex justify-between items-center'>
            <input className='border-2 w-1/3 px-4 py-2' placeholder='$' value={edittedPrice} onChange={e => setEdittedPrice(e.target.value)}></input>
            <button className='bg-green-600 text-white px-6 text-lg py-2 font-roboto' onClick={handleSuccessEdit}>Edit</button>
            </div>
        </form>:
        <div className='flex flex-col items-center justify-center w-full text-center border-2 shadow-2xl py-4 lg:text-left'>
        <div className='flex flex-col w-full items-end'>
            <div onClick={handleOpen}>{toggle ? <FontAwesomeIcon icon={faSortDown} className='px-4 text-2xl cursor-pointer'></FontAwesomeIcon> : <FontAwesomeIcon icon={faSortUp} className='px-4 text-2xl cursor-pointer'></FontAwesomeIcon>}</div>
            <div className='flex w-full justify-end px-4 py-2 space-x-2 max-h-0 overflow-hidden duration-200' ref={section}>
            <button className='bg-purple-400  text-white px-2' onClick={handleEdit}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button>
            <button className='bg-red-600 text-white px-2' onClick={handleDelete}><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
            </div>
        </div>
        <img src={item.image} className='w-40'/>
        <div className='flex flex-col items-center justify-center space-y-4 px-4 py-4 lg:items-start'>
            <h3 className='font-roboto text-xl'>{item.title}</h3>
            <p className='font-sans text-sm'>{item.description}</p>
            <p className='font-roboto bg-gray-200 px-2 py-2'>{item.category}</p>
            <button className='bg-gray-900 text-white font-roboto px-4 py-2 text-sm hover:bg-black hover:text-white duration-200'>Add {item.price}$</button>
        </div> 
        </div>
        }
    </div>
        
    
        
  )
}

export default ItemCard