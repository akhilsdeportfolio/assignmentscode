
import {List,ListItem,ListIcon,Center,HStack,VStack,Input,IconButton,Button,Checkbox,CheckboxGroup,Spacer,Text,Heading,Wrap,WrapItem} from '@chakra-ui/react';
import {FaCircle,FaWindowClose,FaMedal} from 'react-icons/fa';
function TodoList({todos,check,deleteListItem})
{


     let handleChange =(id)=>{
          check(id);
     }

     let handleDelete=(id)=>{
          deleteListItem(id);
     }
     
     return(
          <>
          <VStack spacing={10} w="100%" m="40px">

          <div >
          <Wrap border="2px" borderColor="red.100" borderRadius="5px" padding="20px"  borderStyle="dashed" >
          
          <WrapItem key="1asdasd" spacing={3} textAlign="center">
               <List spacing={3}  overflowWrap="break-word" key="123" width="256px">
               <Heading as="h4" size="md" color="red.500">Pending Tasks</Heading>       

               {todos.length===0 ? <Center  color="red.700"> <FaMedal/><Text ml="5px">All tasks Done.</Text> </Center> : null}


                  {                       
                       todos.map((el)=>{
                            //console.log("TodoList 20:",el)
                        if(!el.status)    
                            return( 
                                 <>                         
                         <ListItem padding="10px"  key={el.id} border="2px" borderColor="gray.100" padding={5} borderRadius="10px" width="100%" >
                             <HStack spacing="5px" >                                       
                                   <Checkbox size="lg" isChecked={el.status} onChange={()=>{
                                        handleChange(el.id)
                                   }} ><Spacer/></Checkbox>    
                                   
                                   <Text as="h3" size="md">{ el.title }</Text>
                                   <Spacer/>                               
                                   <IconButton  color="red.400" onClick={()=>{
                                        handleDelete(el.id)
                                   }}>
                                        <FaWindowClose/>
                                   </IconButton>
                             </HStack>
                         </ListItem>     
                         </>
                             )
                         
                            
                       })
                  }  
          </List>     
          </WrapItem>
          
          </Wrap>  
          </div>      
          

          

          <div>
          <Wrap border="2px" borderColor="green.100" borderRadius="5px" padding="20px"  borderStyle="dashed" >
          
          <WrapItem key="1asdasd" spacing={3} textAlign="center">
               <List spacing={3}  overflowWrap="break-word" key="123" width="256px">
               <Heading as="h4" size="md" color="green.500">Completed Tasks</Heading>       

               {todos.length===0 ? <Center  color="green.700"> <FaMedal/><Text ml="5px">All tasks Done.</Text> </Center> : null}
                  {                       
                       todos.map((el)=>{
                            //console.log("TodoList 20:",el)
                        if(el.status)    
                            return( 
                                 <>                         
                         <ListItem padding="10px"  key={el.id} border="2px" borderColor="gray.100" padding={5} borderRadius="10px" width="100%" >
                             <HStack spacing="5px" >                                       
                                   <Checkbox size="lg" isChecked={el.status} onChange={()=>{
                                        handleChange(el.id)
                                   }} ><Spacer/></Checkbox>    
                                   
                                   <Text as="h3" size="md">{ el.title }</Text>
                                   <Spacer/>                               
                                   <IconButton  color="red.400" onClick={()=>{
                                        handleDelete(el.id)
                                   }}>
                                        <FaWindowClose/>
                                   </IconButton>
                             </HStack>
                         </ListItem>     
                         </>
                             )
                         
                            
                       })
                  }  
          </List>     
          </WrapItem>
          
          </Wrap>  
          </div>      
          

     </VStack>
               
     </>
     )



}

export {TodoList};