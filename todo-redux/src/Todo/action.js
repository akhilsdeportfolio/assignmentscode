import { ADD_TODO_FAILURE, ADD_TODO_LOADING, ADD_TODO_SUCCESS,DELETE_TODO,GET_TODO_FAILURE,GET_TODO_LOADING,GET_TODO_SUCCESS, TOGGLE_TODO } from "./actionTypes"

export const addTodoLoading = ()=>{
     return {type:ADD_TODO_LOADING};
}
export const addTodoSuccess = (data)=>{
     return {type:ADD_TODO_SUCCESS,payload:data};
}
export const addTodoFailure = (data)=>{
     return {type:ADD_TODO_FAILURE,payload:data};
}


export const getTodoLoading = ()=>{
     return {type:GET_TODO_LOADING};
}
export const getTodoSuccess = ()=>{
     return {type:GET_TODO_SUCCESS};
}
export const getTodoFailure = ()=>{
     return {type:GET_TODO_FAILURE};
}

export const toggleTodo = (data)=>{
     return {type : TOGGLE_TODO,payload:data};
}

export const deleteTodo = (data)=>{
     return {type : DELETE_TODO,payload:data};
}

