
import {List,ListItem,ListIcon,Box,Flex,Center,HStack,VStack,Input,IconButton,Button,Checkbox,CheckboxGroup,Spacer,Text,Heading,Wrap,WrapItem} from '@chakra-ui/react';
import {FaCircle,FaWindowClose,FaMedal} from 'react-icons/fa';
function TodoList({todos,check,deleteListItem,clearTasks})
{


     let handleChange =(id)=>{
          check(id);
     }

     let handleDelete=(id)=>{
          deleteListItem(id);
     }
     
     return(
          <>
          <VStack spacing={10} m="40px">

          <div >
          <Wrap border="0px" borderColor="red.400" borderRadius="5px" padding="20px"  borderStyle="dashed" >
          
          <WrapItem key="1asdasd" spacing={3} textAlign="center">
               <List spacing={3}  overflowWrap="break-word" key="123" >
               <Heading as="h4" size="md" color="whiteAlpha.900">Pending Tasks</Heading>       

               


                  {                       
                       todos.map((el)=>{
                            //console.log("TodoList 20:",el)
                        if(!el.status)    
                            return( 
                                 <Box lineHeight="tight" >                         
                         <ListItem  padding="10px" bg="gray.300"  key={el.id} border="2px" borderColor="gray.100" padding={5} borderRadius="20px" >
                             <HStack spacing="5px" >                                       
                                   <Checkbox size="lg" isChecked={el.status} onChange={()=>{
                                        handleChange(el.id)
                                   }} ><Spacer/></Checkbox>    
                                   
                                   <Text  overflowWrap="break-word" as="h3" size="md" >{ el.title }</Text>
                                   <Spacer/>                               
                                   <IconButton  color="red.400" onClick={()=>{
                                        handleDelete(el.id)
                                   }}>
                                        <FaWindowClose/>
                                   </IconButton>
                             </HStack>
                         </ListItem>     
                         </Box>
                             )
                         
                            
                       })
                  }  

               {todos.length===0 ? <Center  color="whiteAlpha.900"> <FaMedal/><Text ml="5px">All tasks Done.</Text> </Center> : null}
          </List>     
          </WrapItem>
          
          </Wrap>  
          </div>      
          

          

          <div>
          <Wrap border="0px" borderColor="whiteAlpha.900" borderRadius="5px" padding="20px"  borderStyle="dashed" >
          
          <WrapItem key="1asdasd" spacing={3} textAlign="center">
               <List spacing={3}  overflowWrap="break-word" key="123" >
               <Heading as="h4" size="md" color="whiteAlpha.900">Completed Tasks</Heading>       

                 {                       
                       todos.map((el)=>{
                            //console.log("TodoList 20:",el)
                        if(el.status)    
                            return( 
                                 <Box>                         
                         <ListItem padding="10px" bg="gray.300"  key={el.id} border="2px" borderColor="gray.100" padding={5} borderRadius="20px">
                             <HStack spacing="5px" >                                       
                                   <Checkbox size="lg" isChecked={el.status} onChange={()=>{
                                        handleChange(el.id)
                                   }} ><Spacer/></Checkbox>    
                                   
                                   <Text overflowWrap="break-word" as="h3" size="md" as="s">{ el.title }</Text>
                                   <Spacer/>                               
                                   <IconButton  color="red.400" onClick={()=>{
                                        handleDelete(el.id)
                                   }}>
                                        <FaWindowClose/>
                                   </IconButton>
                             </HStack>
                         </ListItem>     
                         </Box>
                             )
                         
                            
                       })


                       
                  }  

{todos.length===0 ? <Center  color="whiteAlpha.900"> <FaMedal/><Text ml="5px">All tasks Done.</Text> </Center> :<Button onClick={clearTasks}>Clear All Tasks</Button>}
                
          </List>     
          </WrapItem>
          
          </Wrap>  
          </div>      
          

     </VStack>
               
     </>
     )



}

export {TodoList};