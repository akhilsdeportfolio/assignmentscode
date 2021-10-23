import logo from './logo.svg';
import './App.css';
import Trial from './components/Trail'
import {TodoInput} from './components/TodoInput';
import {Box} from '@chakra-ui/react'

function App() {
  return (
    
      <Box >
      <Trial/>
      <TodoInput padding="5px"/>
      </Box>
    
  );
}

export default App;
