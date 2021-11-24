import {createStore} from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer);

store.subscribe(()=>{
     console.log("Something changed");
     //console.log(store.getState())
})