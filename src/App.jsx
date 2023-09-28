import './App.css'
import {useRef, useState } from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import { Provider } from './context/MainContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faMoon, faPlus, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [toggle, setToggle] = useState(true);
  const [darkToggle,setDarkToggle] = useState(false);
  const openCreateMenu = () => {
    setToggle(!toggle);
    const addItem = document.querySelector("#add-item");
    if (toggle) {
      addItem.classList.add("h-[420px]");
      addItem.classList.remove("h-0");
    }
    else {
      addItem.classList.add("h-0");
      addItem.classList.remove("h-[420px]");
    }
    
  }
  const handleDark = () => {
    if (!darkToggle) {
      document.body.classList.add("dark");
      setDarkToggle(true);
    }
    else {
      document.body.classList.remove("dark");
      setDarkToggle(false);
    }
  }
 
  return (
    <Provider>
    <main className='px-24 py-12 dark:bg-black' id='main'>
      <div className='flex w-full items-center justify-between pb-4' >
            <h1 className='text-2xl bg-gray-800 text-white px-4 py-1 cursor-pointer hover:bg-black hover:text-white duration-200' onClick={openCreateMenu}>
              {toggle ? <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> : <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>}
              </h1>
              <div onClick={handleDark}>
              {darkToggle ? <FontAwesomeIcon icon={faSun} className='text-black bg-white text-2xl cursor-pointer hover:bg-black hover:text-white px-4 py-2 duration-200'></FontAwesomeIcon>:<FontAwesomeIcon icon={faMoon} className='text-2xl cursor-pointer hover:bg-black hover:text-white px-4 py-2 duration-200'></FontAwesomeIcon>}
              </div>
      </div>
      <AddItem />
      <ItemList/>
    </main>
    </Provider>
  )
}

export default App
