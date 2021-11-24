import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import {Switch,Route} from 'react-router-dom';
import EditTodo from './components/EditTodo';
function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" >
              <Todo/>
          </Route>
          <Route path="/todo/:id" >
              <EditTodo/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
