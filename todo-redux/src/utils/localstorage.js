import { createDispatchHook, useDispatch } from "react-redux";
import { store } from "../store";
import { getTodoFailure, getTodoLoading, getTodoSuccess } from "../Todo/action";

export const loadData = (key)=>
{    
     
     
     if(localStorage.getItem(key))
     {
      
          return JSON.parse(localStorage.getItem(key));
     }
     else 
     {
               
               return undefined;   
     }  
}


export const saveData =(key,data)=>{
     localStorage.setItem(key,JSON.stringify(data));
}