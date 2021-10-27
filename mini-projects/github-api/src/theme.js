import { extendTheme } from "@chakra-ui/react";



let config ={
    "initialColorMode":"dark",
    "useSystemColorMode":false
}


 let theme = extendTheme({config});

 export default theme;