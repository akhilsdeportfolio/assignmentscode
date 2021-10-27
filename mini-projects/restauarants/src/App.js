import logo from './logo.svg';
import './App.css';
import {Text,HStack,Box,Center,Heading,Button,Spacer,IconButton,Flex} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react';
import { UserRegistration } from './UserRegistration';
import axios from 'axios';
import call from './util/call';

function App() {

  const ref = useRef(null);
  const [count,setCount]=useState(0);
  const [isRunning,seTIsRunning]=useState(false);
  const top = useRef(null);
  const inpRef=useRef(null);
  useEffect(()=>{
    
  },[]);


  let initData = {
    name:"",
    age:20,
    gender:null,
    agreed:false
  }

  let [data,setData]=useState(initData);


  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
    console.log(inpRef.current.files[0]);
  }

  let handleChange =(e)=>{

    
    console.log(e.target)    ;
    const {name,value,type,checked}=e.target;
    let formData ={...data,[name]: type==="checkbox"?checked:value};
    setData(formData);
    console.log(formData);
    



  }


  let makeApiCall = (e)=>{
    e.preventDefault();
    call.get("/users").then(res=>console.log(res)).catch(e=>console.error(e));
  }






  let handlePause = ()=>{
    clearInterval(ref.current);
    seTIsRunning(false);
  }

  let handleStart = ()=>{
    ref.current=setInterval(()=>{
      setCount((prev)=> {return prev+1});
      //setCount(count+1);
      seTIsRunning(true);
    },1000);  
  }

  let handleReset = ()=>{
    setCount(0);
  }
  
  return (

    < >

    <UserRegistration/>
    <Flex ref={top} m="2" gridGap="10"  flexDirection="column">
      <Center><Heading>{count}</Heading></Center>
    

      <Center >


      <Button disabled={!isRunning}
      onClick={handlePause}
  size="lg"
  height="48px"
  pl="10"
  pr="10"
  border="2px"
  borderColor="green.500"
>
  Pause
</Button>
<Spacer/>
  <Button
  disabled={isRunning}
  onClick={handleStart}
  size="lg"
  height="48px"
  pl="10"
  pr="10"
  border="2px"
  borderColor="green.500"
>
  Start
</Button>
<Spacer/>
<Button disabled={isRunning ? true: false}
  onClick={handleReset}
  size="lg"
  height="48px"
  pl="10"
  pr="10"
  border="2px"
  borderColor="green.500"
>
  Reset
</Button>
</Center>


<Box h="400" bg="cyan.400"/>
<Box h="400" bg="teal.400"/>
<Box h="400" bg="blue.400"/>
<Box h="400" bg="green.400"/>
<Button  border="2px"
  borderColor="green.500" onClick={()=>{top.current.scrollIntoView({behavior:"smooth"})}}>Move to top</Button>
</Flex> 


<Flex flexDirection="row">


  <form onSubmit={makeApiCall}>

    <input onChange={handleChange} name="name" placeholder="Enter Name"/>

    <input onChange={handleChange} name="age" placeholder="Enter age"/>
    <select onChange={handleChange}  name="gender">
      <option value="male">Male</option>
      <option value="female">Fe-Male</option>
    </select>
    <label>Agree<input onChange={handleChange} name="agreed" type="checkbox"/></label>
    <input ref={inpRef} type="file" name="files" />
    <input type="submit"/>

    
  </form>
</Flex>
</>

  );
}

export default App;
