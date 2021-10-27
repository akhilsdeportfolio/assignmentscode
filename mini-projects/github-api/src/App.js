import logo from './logo.svg';
import './App.css';
import {FaSea, FaSearchengin, FaUser} from 'react-icons/fa';

import {Text,Center,Stack,Spacer,Flex,Heading,Box,Input,Button, List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import axios from 'axios';
function App() {

  const [query,setQuery]=useState("");
  const [results,setResults]=useState([]);
  const [loading,setLoading]=useState(false);


  useEffect(() => {
    //console.log("Inside of use effect for results")
    return () => {
      //cleanup
      //console.log("Cleanuo of use effect for results");
    }
  }, [results])

  let handleOnChange=(e)=>
  {
      let {value}=e.target;
      setQuery(value);
   //   console.log(query);
  }

  let makeApiCall =async()=>
  { 
  setLoading(true);
  let res=await axios.get("https://api.github.com/search/users",{
        params:{
          q:query
        }
      });

      
  setResults(res.data.items);
  setLoading(false);

  }

  return (
    
    <>

    <Box padding="10">




       <Stack spacing={3} mt={20} p={10} width="50%" m="auto" >
       <Heading as="h2" size="md">Welcome to the github api please enter username to get started</Heading>
        <Input variant="filled" placeholder="enter username to proceed" p={5} onChange={handleOnChange}/>
    <Center>
        <Button isLoading={loading} onClick={ makeApiCall} leftIcon={<FaSearchengin/>} variant="outline" colorScheme="teal" maxWidth={200}>Search</Button>
    </Center>        


    <List>
      {results.map((item)=>{
        
       return <ListItem  key={item.id} borderRadius={5} m={5} p={5} as="h5" size="md" color="white" p="5" border="1px" borderColor="teal.100" >
         <Flex>
          <Center> 
          <ListIcon a={<FaUser/>}/>
          
          <Text size="md">{item.login} m={2}</Text>
          </Center>
        </Flex>  
          </ListItem>
      }
      )}
   </List>   
      </Stack>


    
      
    </Box>
    </>
  );
}

export default App;
