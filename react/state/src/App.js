import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TodoList from './TodoList';
function App() {


  //state and dispatch function
  let [count,setCount]=useState(0);
  let [age,setAge]=useState(0);

  let handleClick =(value)=>{
    setCount(count+value);
  }

  return (
    <>
      <h1>Count :{count}</h1>



      <button onClick={()=>{
        handleClick(1);
      }} >Add</button>

<button onClick={()=>{
        handleClick(-1);
      }} >Add</button>


      <TodoList/>
    </>
  );
}


export default App;
