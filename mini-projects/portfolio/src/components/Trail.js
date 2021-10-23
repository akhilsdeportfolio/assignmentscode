
import { Flex, Spacer,Heading,Center,Drawer,
     DrawerBody,
     DrawerFooter,
     DrawerHeader,
     DrawerOverlay,
     DrawerContent,Input,
     DrawerCloseButton,useDisclosure,Circle} from "@chakra-ui/react"
import { Button,IconButton} from '@chakra-ui/button'
import { Fa, FaAd, FaGithub, FaLinkedin, FaRegPlusSquare } from 'react-icons/fa'
import { useState,useRef} from "react";




function Trial()
{
     const property = {
          imageUrl: "https://bit.ly/2Z4KKcF",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern home in city center in the heart of historic Los Angeles",
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4,
        }
     
        const { isOpen, onOpen, onClose } = useDisclosure()
          const btnRef = useRef()
      const [isClicked,setClicked]= useState(true);
      const handleClick = ()=>{
           console.log(isClicked);
           setClicked(!isClicked)
          };
        return (

          <>

               <Flex bg="teal.300" w="100%" padding="20px" >
               <Center>
               <Heading as="h3" size="md" color="white">
               Todo List
               </Heading>
               </Center>
               <Spacer/>


               
               <Circle size="40px" bg="teal.700" color="white" mr="20px">
                    <FaLinkedin/>
               </Circle>

               <Circle size="40px" bg="teal.700" color="white">
                    <FaGithub/>
               </Circle>
               
               
               
               </Flex>

               <>
                    
                    <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    >
                    <DrawerOverlay />
                    <DrawerContent>
                         <DrawerCloseButton />
                         <DrawerHeader>Create your account</DrawerHeader>

                         <DrawerBody>
                         <Input placeholder="Type here..." />
                         </DrawerBody>

                         <DrawerFooter>
                         <Button variant="outline" mr={3} onClick={onClose}>
                         Cancel
                         </Button>
                         <Button colorScheme="blue">Save</Button>
                         </DrawerFooter>
                    </DrawerContent>
                    </Drawer>
               </>

          </>
          
        )
}


export default Trial;
