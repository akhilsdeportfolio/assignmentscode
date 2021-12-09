import { useState } from "react";
import {TodoItem} from './TodoItem';

export const Todo=()=>{

     const [todo,setTodo]=useState("")
     const [todos,setTodos]=useState(['this is test1','this is test3','this is test2','this is test3']);

     const addTodo=(e)=>{
          setTodos([...todos,todo]);
          setTodo("");
     }

     const deleteItem =(id)=>{
          let todosCopy = [...todos];
          todosCopy.shift();
          setTodos(todosCopy);
     }
     return (<>
          <div>
               <h1>Welcome to todo app</h1>
               

               <div className="container">
                    <input placeholder="enter task" data-id="inputBox" value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
                    <button onClick={addTodo}>Add</button>
               </div>

               <div className="container">
                    <ol className="todos">
                    {todos.map((el)=>{
                         return <TodoItem title={el} deleteItem={deleteItem}/>
                    })}
                    </ol>
               </div>
          </div>
     </>)
}