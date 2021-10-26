import { useState } from "react"


export default function TodoList()
{

     const [text,setText]=useState("");
     const [todos,setTodos]=useState([]);



     let handleChange =(e)=>{

          setText(e.target.value);

     }


     let handleClick = ()=>{


          
          setTodos([...todos,text]);
          //console.log(todos);
          setText("");
     }


     


     return(
          <>
          
               <br/>
               <input id="input" value={text} onChange={handleChange} />

               <button onClick={handleClick} >Add</button>


               {todos.map((e)=> {return <div>{e}</div>})}

          </>
     )
}