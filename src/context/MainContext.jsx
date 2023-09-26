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

    const sendEditedItem = (EditedID,edittedName,edittedExplanation,edittedCategory,edittedPrice) => {
        const afterEditedList = itemList.map((item) => {
                if (item.id === EditedID) { 
                    return (
                        {
                        id : EditedID,
                        title : edittedName,
                        description : edittedExplanation,
                        category : edittedCategory,
                        price : edittedPrice
                    }
                    )
                    
                }
                else {
                    return ( {
                        id : item.id,
                        title : item.title,
                        description : item.description,
                        category : item.category,
                        price : item.price
                    })
                }
        })
        setItemList(afterEditedList);  
    }

    useEffect(() => {
      sendRequestAPI();
    },[])

        return (
            <GlobalContext.Provider value={{itemList,sendDeletedItem,sendEditedItem}}>
                {children}
            </GlobalContext.Provider>
        )
}




export default GlobalContext;