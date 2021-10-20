import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {


  //state and dispatch function
  let [count,setCount]=useState(0);
  let [age,setAge]=useState(0);



  return (
    <>
      <h1>Count :{count}</h1>
      <button  onClick={(e)=>{
        let updatedCount = count+1;              
        setCount(updatedCount)        
      }}>Add 1</button>

<button onClick={(e)=>{
        let updatedCount = count-1;              
        setCount(updatedCount)        
      }}>Del 1</button>
    </>
  );
}

export default App;
