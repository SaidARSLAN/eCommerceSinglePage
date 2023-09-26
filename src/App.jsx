import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import ItemList from './components/ItemList';

function App() {

  const [itemList, setItemList] = useState([]);

  const sendRequestAPI = async () => {
    const request = await axios.get("https://fakestoreapi.com/products");
    setItemList(request.data);
  }

  useEffect(() => {
    sendRequestAPI();
  },[])


  return (
    <main className='px-24 py-12'>
            <ItemList itemList={itemList}/>
    </main>
  )
}

export default App
