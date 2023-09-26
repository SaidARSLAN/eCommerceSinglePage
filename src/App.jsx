import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

function App() {

  const [itemList, setItemList] = useState([]);
  
  const sendRequestAPI = async () => {
    const request = await axios.get("https://fakestoreapi.com/products");
    setItemList(request.data);
  }

  useEffect(() => {
    sendRequestAPI();
  },[])

  const openCreateMenu = () => {
    const addItem = document.querySelector("#add-item");
    addItem.classList.add("h-80");
    addItem.classList.remove("h-0");
  }

  return (
    <main className='px-24 py-12'>
      <div className='flex w-full items-center justify-end pb-4' onClick={openCreateMenu}>
            <h1 className='text-5xl bg-green-900 text-white px-4 py-1 cursor-pointer hover:bg-green-700 duration-200'>+</h1>
      </div>
      <AddItem />
            <ItemList itemList={itemList}/>
    </main>
  )
}

export default App
