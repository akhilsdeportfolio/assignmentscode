import {applyMiddleware, compose, createStore} from 'redux';
import { todoReducer } from './Todo/reducer';


const logger = (state)=>(next)=>(action)=>{
     //console.log("store middleware ",action,state);
     return next(action);
}
export const store = createStore(todoReducer,compose(applyMiddleware(logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.subscribe(()=>{
     //console.log("TodoStore DATA CHANGED");
});  

