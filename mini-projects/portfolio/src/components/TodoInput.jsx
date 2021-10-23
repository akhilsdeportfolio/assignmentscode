
import { Input,Center,Spacer,Box,Text,HStack,VStack,useToast} from  '@chakra-ui/react';
import { IconButton} from '@chakra-ui/button'
import { Fa, FaAd, FaRegPlusSquare } from 'react-icons/fa'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {TodoList} from './TodoList';
function TodoInput({padding})
{   
     
     const toast=useToast();

     const [todo,SetTodo] = useState({
          title:"",
          status:false,
          id:uuidv4()
          });
     const [todos,setTodos] = useState([]);


     let handleChange =(e)=>{
          //console.log(e.target.value);
          SetTodo({
               title:e.target.value,
               status:false,
               id:uuidv4()
          });
     };   


     let addTodo = ({todo})=>{

          if(todos.length==0)
          {
               setTodos([todo]);
          }
          else
               setTodos([...todos,todo]);
     }

     let handleClick = ()=>{
          //console.log(todo);

          if(todo.title==="")
          {
               toast({
                    title: "Task Title required.",
                    description: "please enter the task you want to do.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  })
               return;
          }
          addTodo({ todo });
          
          SetTodo({
               title:"",
               status:false,
               id:uuidv4()
          });
          
     }


     let handleDelete=(id)=>
     {
          

          setTodos(todos.filter((el)=>{
               if(el.id==id);
               else
               return el;
          }))
     }


     let handleChecked =(id)=>
     {

          //alert("Checked");
          
          console.log('id'+id);

          let arr = todos.map((el)=>{
               if(el.id===id)
               {
                    el.status=!el.status;
                    return el;
               }
               else 
                    return el;               
          })          



          setTodos(arr);
          //setTodos([...todos])

     }



     let clearTasks = ()=>{
          setTodos([]);
     }


     return(
          <>
          <Box  m="auto" w="100%" mt="20px"  padding={padding} >
          <Center >

               <IconButton  mr="20px" onClick={ handleClick } size="lg"><FaRegPlusSquare/></IconButton>            
               <Input color="whiteAlpha.900" fontWeight="900"  type="text" variant="filled" size="lg" placeholder="What you want to do Today?" padding="10px" w="80%" onChange={handleChange} value={todo.title} />
               
          </Center>

                    
          </Box>
          

          <Box  m="auto" w="100%" mt="20px"  >
          <VStack w="100%">
                    <TodoList key="8" todos={todos} check={handleChecked} deleteListItem={handleDelete}  clearTasks={clearTasks}/>
          </VStack>
          </Box>

               



          </>
     )

}

export {TodoInput};