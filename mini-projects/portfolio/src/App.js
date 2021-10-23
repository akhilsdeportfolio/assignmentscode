import logo from './logo.svg';
import './App.css';
import Trial from './components/Trail'
import {TodoInput} from './components/TodoInput';
import {Box} from '@chakra-ui/react'

function App() {
  return (
    
      <Box className="box" bg="gray.500" backgroundImage="url(https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1120&q=80)" backgroundSize="cover">
      <Trial/>
      <TodoInput padding="5px"/>
      </Box>
    
  );
}

export default App;
