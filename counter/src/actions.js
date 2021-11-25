import { ADD_COUNT, ADD_TODO, DEC_COUNT ,ADD_TODO_LOADING,ADD_TODO_FAILED,ADD_TODO_SUCCESS,GET_TODO_LOADING,GET_TODO_FAILED,GET_TODO_SUCCESS} from "./actionTypes";

export const add_count =(data)=>{
     return {type :ADD_COUNT,payload:data}
}
export const dec_count =(data)=>{
     return {type :DEC_COUNT,payload:data}
}

export const add_todo = (data)=>{
     return {type:ADD_TODO,payload:data}
}
export const add_todo_success = (data)=>{
     return {type:ADD_TODO_SUCCESS,payload:data}
}
export const add_todo_failed = ()=>{
     return {type:ADD_TODO_FAILED,}
}
export const add_todo_loading = ()=>{
     return {type:ADD_TODO_LOADING}
}
export const get_todo_success = (data)=>{
     return {type:GET_TODO_SUCCESS,payload:data}
}
export const get_todo_failed = ()=>{
     return {type:GET_TODO_FAILED,}
}
export const get_todo_loading = ()=>{
     return {type:GET_TODO_LOADING}
}