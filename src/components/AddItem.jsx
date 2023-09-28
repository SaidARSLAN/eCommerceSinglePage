import React, { ChangeEvent,useContext, useState } from 'react'
import GlobalContext from '../context/MainContext'

const AddItem = () => {

    const {sendCreatedProduct} =useContext(GlobalContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [imgPath, setImgPath] = useState(null);

    

    const handleCreate = (event) => {
        event.preventDefault();
        sendCreatedProduct(title,description,category,price,imgPath);
        const addItem = document.querySelector("#add-item");
        const textRef= document.querySelector("#textRef");
        addItem.classList.add("h-0");
        addItem.classList.remove("h-[420px]");
        textRef.textContent = "+";
    }
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setImgPath(reader.result);
            };
            reader.readAsDataURL(selectedFile)
        }
    }

  return (
    <div className='w-full h-0 overflow-hidden duration-200' id='add-item'>
        <form className='flex flex-col space-y-4 w-full'>
            <input className='border-2 px-4 py-2 font-roboto' placeholder='Product Name' value={title} onChange={e => setTitle(e.target.value)}></input>
            <textarea className='border-2 px-4 p-2 font-roboto' rows={5} placeholder='Product Description' value={description} onChange={e => setDescription(e.target.value)}></textarea>
            <select className='border-2 font-roboto px-2 py-2' value={category} onChange={e => setCategory(e.target.value)}>
                <option>men's clothing</option>
                <option>jewelery</option>
                <option>electronics</option>
                <option>women's clothing</option>
            </select>
            <label>Image</label>
            <input type='file' onChange={handleFileChange}/>
            <div className='w-full  flex justify-between items-center'>
            <input className='border-2 w-1/3 px-4 py-2' placeholder='$' value={price} onChange={e => setPrice(e.target.value)}></input>
            <button className='bg-yellow-400 px-6 text-lg py-2 font-roboto' onClick={handleCreate}>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddItem