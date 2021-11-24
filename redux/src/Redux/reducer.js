import { ADD_TODO_FAILED, ADD_TODO_SUCCESS,GET_TODOS_SUCCESS,GET_TODOS_FAILED,GET_TODOS_LOADING } from "./actionTypes";

let initState= {
     loading:false,
     data : [],
     error:null
}

export function reducer(state=initState,{type,payload}) {

     switch(type)
     {
          case ADD_TODO_FAILED:
               return({
                    ...state,
                    loading:false
               });
          case ADD_TODO_SUCCESS:
               return({
                    ...state,
                    loading:false,
                    data:[...state.data,payload]
               });
          case ADD_TODO_FAILED:
               return({
                    ...state,
                    loading:false
               });
          case GET_TODOS_FAILED:
               return({
                    ...state,
                    loading:false
               });
          case GET_TODOS_SUCCESS:
               return({
                    ...state,
                    loading:false,
                    data:[...state.data,...payload]
               });
          case GET_TODOS_FAILED:
               return({
                    ...state,
                    loading:false
               });
          default:
               return ({
                    ...state
               });     
     }



}