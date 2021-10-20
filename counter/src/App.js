import logo from './logo.svg';
import './App.css';

import{useState} from 'react';


function App() {

  const [count,setCount] = useState(0);

  let handleClick=(value)=>{
    setCount(count+value);
  }


  return (    
    <>
    <h1>Counter : {count}</h1>
    <button onClick={()=>{
      handleClick(1);  }}
      >Add</button>
    <button onClick={()=>{
      handleClick(-1)
    }}>Del</button>
    </>
    
  );
}

export default App;
