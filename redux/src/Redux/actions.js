import {ADD_TODO_SUCCESS,ADD_TODO_LOADING,ADD_TODO_FAILED,GET_TODOS_FAILED,GET_TODOS_LOADING,GET_TODOS_SUCCESS} from './actionTypes';
export const ADD_TODO_SUCCESS_CALL =(data)=>({type:ADD_TODO_SUCCESS,payload:data});
export const ADD_TODO_LOADING_CALL =()=>({type:ADD_TODO_LOADING});
export const ADD_TODO_FAILED_CALL=()=>({type:ADD_TODO_FAILED});
export const GET_TODO_SUCCESS_CALL =(data)=>({type:GET_TODOS_SUCCESS,payload:data});
export const GET_TODO_LOADING_CALL =()=>({type:GET_TODOS_LOADING});
export const GET_TODO_FAILED_CALL=()=>({type:GET_TODOS_FAILED});
