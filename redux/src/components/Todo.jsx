import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { ADD_TODO_FAILED, ADD_TODO_FAILED_CALL, ADD_TODO_LOADING, ADD_TODO_LOADING_CALL, ADD_TODO_SUCCESS, ADD_TODO_SUCCESS_CALL, GET_TODO_FAILED_CALL, GET_TODO_LOADING_CALL, GET_TODO_SUCCESS_CALL } from "../Redux/actions";
import { GET_TODOS_LOADING } from "../Redux/actionTypes";
import { store } from "../Redux/store";



export default function Todo() {

     let dispatch = useDispatch();
     let {loading,data,error} = useSelector((store)=>store);
     
     //console.log(loading,data,error)
     let [title,setTitle]=useState("");
     const handleChange=(e)=>{
          let {value}=e.target;
          setTitle(value);
     }
     const handleClick = async (e)=>{          
          dispatch(ADD_TODO_LOADING_CALL());

          try{
          let {data}= await axios.post("http://localhost:3001/todos",{title})
          console.log("data",data);
          dispatch(ADD_TODO_SUCCESS_CALL(data));
          setTitle("");
          }
          catch(e)
          {
             dispatch(ADD_TODO_FAILED_CALL());
               console.log(e);
               setTitle("");
          }




     }


     useEffect(async ()=>{
          dispatch(GET_TODO_LOADING_CALL())
          try{
          let {data} = await axios.get("http://localhost:3001/todos");
          console.log(data);
          dispatch(GET_TODO_SUCCESS_CALL(data));
          }
          catch(e)
          {
               dispatch(GET_TODO_FAILED_CALL());
          }


     },[1]);
     
     return(<>
          <div style={{margin:'30px'}}>
          <div style={{display:'flex',flexDirection:'row',width:'50%',margin:'auto'}}>
          <input style={{padding:'15px',flexGrow:1}} placeholder="Enter Something" value={title} onChange={handleChange} />
          <div style={{flexBasis:'50px'}}></div>
          <button style={{border:'2px solid black',backgroundColor:'whitesmoke',height:'20px'}} onClick={handleClick}>ADD TODO</button>
          </div>
          </div> 

          {loading ? "Loading....":<>
               <div>
                    {data.map((el)=>{
                         return <div  key={el.id} style={{display:'flex',width:'50%',margin:'auto',flexDirection:'row',alignContent:'center',backgroundColor:'whitesmoke',border:'1px solid gray',justifyContent:'space-between',textAlign:'center'}}><p>{el.title}</p> <Link to={'/Todo/'+el.id}> <button style={{flexGrow:0,height:"30px",margin:'15px',maxWidth:'100px'}}>Edit</button></Link> </div>
                    })}
               </div>
          </>}
     </>)
}    