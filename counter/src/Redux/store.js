import { createStore,applyMiddleware,compose} from "redux";
import { reducer } from "./reducer";

const middleWare1 = (store)=>(next)=>(action)=>{
     console.log("m1")
     next(action);
     console.log("Exiting m1")
}
const middleWare2 = (store)=>(next)=>(action)=>{
     console.log("m2")
     next(action);
     console.log("Exiting m2")
}
export const store = createStore(reducer,compose(applyMiddleware(middleWare1,middleWare2),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/* 
store.subscribe(()=>{
     let prev = store.getState();
     console.log("Something changed");
     
     console.log("current is ",store.getState());     
}) */