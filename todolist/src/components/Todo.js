import { useState } from "react"
import TodoList from "./TodoList";
import styles from './Todo.css'


function Todo()
{

     const [text,setText]= useState("");
     const [todos,setTodo]= useState([]);
     

     let handleChange = (e)=>{
          setText(e.target.value);
     };


     let handleClick=()=>{

          setTodo([...todos,text]);
          //console.log(todos);
          setText("")          
          
     }
     return(
          < >
               <div className='container'>
                    <h1>Todo List</h1>
               <input className='left' value={text} placeholder="Enter Something" onChange={handleChange}/>
               <button className="button right" onClick={handleClick}><img src={'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png'}/></button>
               <div className="clear"></div>
               <TodoList todos={todos} />
               </div>
          </>
     )
}


export {Todo};