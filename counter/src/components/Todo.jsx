import { store } from "../Redux/store";
import { useDispatch,useSelector } from "react-redux";
import { add_todo } from "../actions";
import { useState } from "react";

export const Todo=()=>{

     const todos = useSelector(store=>store.todos.data);
     console.log(todos)
     const dispatch = useDispatch();
     const [title,setTitle]=useState();

     const handleChange = (e)=>{
          let {value,name} = e.target;
          //console.log(value);
          setTitle(value);
     }
     const handleClick = (e)=>{
          dispatch(add_todo(title));
          //console.log(store.getState());
          setTitle("");
     }
     return (<>
          <input placeholder="add something" value={title} onChange={handleChange} />
          <button onClick={handleClick}>Add</button>
          <br/>
          <h1>Todo List</h1>
          {todos.map((el)=>{
               return <div key={Math.random()*1000000000000}>{el}</div>
          })}
     </>);
}

