import { createContext } from "react";



const cartContext = createContext();

const cartContextProvider= ()=>{
     return <cartContext.Provider ></cartContext.Provider>
}