import logo from './logo.svg';
import './App.css';
import { store } from './Redux/store';
import { add_count ,dec_count} from './actions';
import {useDispatch,useSelector} from 'react-redux';
import { Todo } from './components/Todo';

function App() {

  let state = useSelector(store=>store.count);
  let dispatch=useDispatch();
  console.log("State",state);
  //console.log("rendered")
  return (
    <div className="App">
        <h1>{store.getState().count}</h1>

     <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <button onClick={(e)=>{dispatch(add_count(1))}}>ADD</button>
        <button onClick={(e)=>{dispatch(dec_count(1))}}>DEC</button>
      </div>  

      <Todo/>
    </div> 
  );
}

export default App;
