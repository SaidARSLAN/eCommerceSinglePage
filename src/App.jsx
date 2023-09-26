import axios from 'axios'
import './App.css'
import { useEffect, useRef, useState } from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import { Provider } from './context/MainContext';

function App() {

  

  const textRef = useRef();

  const openCreateMenu = () => {

    const addItem = document.querySelector("#add-item");
    if (addItem.classList.contains("h-0")) {
      addItem.classList.add("h-80");
      addItem.classList.remove("h-0");
      textRef.current.textContent = "-"
    }
    else {
      addItem.classList.add("h-0");
      addItem.classList.remove("h-80");
      textRef.current.textContent = "+"
    }
    
  }

  return (
    <Provider>
    <main className='px-24 py-12'>
      <div className='flex w-full items-center justify-end pb-4' onClick={openCreateMenu}>
            <h1 className='text-5xl bg-green-900 text-white px-4 py-1 cursor-pointer hover:bg-green-700 duration-200' ref={textRef}>+</h1>
      </div>
      <AddItem />
      <ItemList/>
    </main>
    </Provider>
  )
}

export default App
