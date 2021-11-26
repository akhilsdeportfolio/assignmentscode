import axios from "axios";
import { useEffect, useState } from "react";
import {shallowEqual, useDispatch,useSelector} from 'react-redux';
import { v4 } from "uuid";
import { addTodoFailure, addTodoLoading, addTodoSuccess, deleteTodo, getTodoLoading, getTodoSuccess, toggleTodo } from "../Todo/action";
import  {MdDangerous,MdTick} from 'react-icons/md';
import {TiTick} from 'react-icons/ti';
export default function(){

     const dispatch = useDispatch();
     //dispatch(getTodoLoading())
     const todos = useSelector((state)=>state.todos);
     //dispatch(getTodoSuccess())
     const [title,setTitle]=useState("");
     const handleChange = (e)=>{
          setTitle(e.target.value);


     }


     useEffect(()=>{
          //dispatch(getTodoSuccess());
     },[todos]);



     const toggle = (id)=>{
          dispatch(toggleTodo(id));
     }

     const handleDelete =(id)=>{
          dispatch(deleteTodo(id));
     }

     const handleClick =async (e)=>{
          dispatch(addTodoLoading());

          try{
          let resp = await axios.post("http://localhost:3001/todos",{title});
               dispatch(addTodoSuccess({id:v4(),title,status:false}));
          }
          catch(e)
          {
               console.log("error",e)
               dispatch(addTodoFailure(e));
          }

          //console.log(title);


          setTitle("");
     }

     return(<> 

               <div className="container-fluid" style={{padding:'1%'}}>
                         <div className="row">
                              <div className="col-10">
                              <input class="form-control" value={title} placeholder="Enter Some task" onChange={handleChange} />
                              </div>
                              <div className="col-2">
                                   <button class="btn btn-primary" onClick={handleClick}>ADD TASK</button>
                              </div>
                         </div>    
               </div>    
               
               <div className="container">
                    <h1>Tasks</h1>
                    <ul style={{listStyle:'none'}}>
                         {todos.map((el)=>{
                              return <li key={el.id} style={{padding:'10px'}}>
                                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'20px',backgroundColor:'whitesmoke',border:'1px solid gray'}}>
                                             <h5 style={{flexBasis:'33%'}}>{el.title}</h5>
                                             <p style={{flexBasis:'33%'}}>{el.status ? <TiTick style={{color:'green'}}/>:<MdDangerous style={{color:'red'}}/> }</p>
                                             {/* {!el.status ? <p style={{color:'red'}}>pending</p> : <p style={{color:'green'}}>completed</p> } */}
                                             <div className="container" style={{flexBasis:'33%'}} >
                                             
                                             {!el.status ? <button className="btn btn-sm btn-primary" style={{margin:'5px'}} onClick={()=>{
                                                  toggle(`${el.id}`);
                                             }}>Finished</button>:
                                             <button className="btn btn-sm btn-secondary" style={{margin:'5px'}} onClick={()=>{
                                                  toggle(`${el.id}`);
                                             }}>Not Finished</button>}
                                             <button className="btn btn-sm btn-danger" style={{margin:'5px'}} onClick={()=>{handleDelete(`${el.id}`)}}>Delete</button>
                                             </div>
                                             
                                        </div>
                                   </li>
                         })}
                    </ul>     
               </div>
          
     </>)
}