import { ADD_COUNT, ADD_TODO, DEC_COUNT ,ADD_TODO_LOADING,ADD_TODO_FAILED,ADD_TODO_SUCCESS,GET_TODO_LOADING,GET_TODO_FAILED,GET_TODO_SUCCESS} from "../actionTypes";

let initState={    
     count:0,
     todos:{
          loading:false,
          data:[],
          error:null
     }
}

export function reducer(state = initState, { type, payload }) {
     switch (type) {
          case ADD_COUNT:
               return ({
                    ...state,
                    count: state.count+payload
               });

          case DEC_COUNT:
               return ({
                    ...state,
                    count: state.count-payload
               });
          case ADD_TODO:
               
               return ({
                    ...state,
                    todos:{...state.todos,
                         loading:false,data:[...state.todos.data,payload]}
               });     
          case ADD_TODO_SUCCESS:
               return ({
                    ...state,
                    loading:false,
                    todos:[...state.todos,payload]
               });     
          case ADD_TODO_FAILED:
               return ({
                    ...state,
                    loading:false                    
               });     
          case ADD_TODO_LOADING:
               return ({
                    ...state,
                    loading:true                    
               });     
          case GET_TODO_SUCCESS:
               return ({
                    ...state,
                    loading:false,
                    todos:[...state.todos,payload]
               });     
          case GET_TODO_FAILED:
               return ({
                    ...state,
                    loading:false                    
               });     
          case GET_TODO_LOADING:
               return ({
                    ...state,
                    loading:true                    
               });     
          default :
               return {
                    ...state
               }     

     }

}