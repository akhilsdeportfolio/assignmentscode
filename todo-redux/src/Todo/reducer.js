import { loadData, saveData } from "../utils/localstorage";
import { ADD_TODO_FAILURE, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO, TOGGLE_TODO } from "./actionTypes"


let initState=loadData('todos')||{
     loading:false,
     todos:[],
     error:null
}


export const todoReducer = (state=initState,{type,payload})=>
{    
          switch(type)
          {
               case ADD_TODO_LOADING:
               return {
                    ...state,
                    loading:true                    
               }
               case ADD_TODO_SUCCESS:
                //console.log(state);
                saveData("todos",{
                    ...state,
                    todos:[...state.todos,payload],
                    loading:false,
                    error:null
               })
               return {
                    ...state,
                    todos:[...state.todos,payload],
                    loading:false,
                    error:null
               }
               case ADD_TODO_FAILURE:
               return {
                    ...state,                    
                    loading:false,
                    error:payload
               }

               case DELETE_TODO:
               saveData("todos",{
                    ...state,                    
                    loading:false,
                    todos:[...state.todos.map((el)=>{
                         if(el.id===payload)
                         {
                              return null;
                         }
                         else 
                              return el;
                    }).filter((el)=> el!=null ? el:console.log("skipping"))],
                    error:null
               })
               return {
                    ...state,                    
                    loading:false,
                    todos:[...state.todos.map((el)=>{
                         if(el.id===payload)
                         {
                              return null;
                         }
                         else 
                              return el;
                    }).filter((el)=> el!=null ? el:console.log("skipping"))],
                    error:null
               }
               saveData("todos",{...state})

               case TOGGLE_TODO:
                    
               return {
                    ...state,                    
                    todos:[...state.todos.map((el)=>{
                         if(el.id === payload)
                         {
                              el.status=!el.status
                              return el;
                         }
                         else 
                              return el;
                    })]
               }
               
               break;
               

               default :

                    return {...state}
          }
}