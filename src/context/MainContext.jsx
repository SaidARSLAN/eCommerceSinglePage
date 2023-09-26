import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export function Provider ({children}) {

    const [itemList, setItemList] = useState([]);
  
    const sendRequestAPI = async () => {
      const request = await axios.get("https://fakestoreapi.com/products");
      setItemList(request.data);
    }
  
    const sendDeletedItem = (deletedId) => {
        const afterDeletedList = itemList.filter((item) => {
                return item.id !== deletedId;
        })
        setItemList(afterDeletedList);
    }
    useEffect(() => {
      sendRequestAPI();
    },[])

        return (
            <GlobalContext.Provider value={{itemList,sendDeletedItem}}>
                {children}
            </GlobalContext.Provider>
        )
}




export default GlobalContext;