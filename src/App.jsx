import './App.css'
import {useRef, useState } from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import { Provider } from './context/MainContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [toggle, setToggle] = useState(true);
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

  return (
    <Provider>
    <main className='px-24 py-12'>
      <div className='flex w-full items-center justify-end pb-4 lg:justify-start' onClick={openCreateMenu}>
            <h1 className='text-2xl bg-gray-800 text-white px-4 py-1 cursor-pointer hover:bg-black hover:text-white duration-200'>
              {toggle ? <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> : <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>}
              </h1>
      </div>
      <AddItem />
      <ItemList/>
    </main>
    </Provider>
  )
}

export default App
