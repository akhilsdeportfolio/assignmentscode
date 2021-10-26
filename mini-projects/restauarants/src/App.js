import logo from './logo.svg';
import './App.css';
import {Text,Box,Center,Heading,Button,Spacer,IconButton,Flex} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react';

function App() {

  const ref = useRef(null);
  const [count,setCount]=useState(0);
  const [isRunning,seTIsRunning]=useState(false);

  useEffect(()=>{
    
  },[]);


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
  console.log(ref);
  return (

    < >
    <Box m="2" gridGap="10"  flexDirection="column">
      <Center><Heading>{count}</Heading></Center>
    <Flex gridGap="20">
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
</Flex>

  </Box> 
    </>

  );
}

export default App;
