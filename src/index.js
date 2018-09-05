 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {count,add_gun,remove_gun,addAsync} from "./index.redux"
const store=createStore(count,applyMiddleware(thunk))
function render(){
    ReactDOM.render(<App store={store} add_gun={add_gun} remove_gun={remove_gun} addAsync={addAsync}  />, document.getElementById('root'));
    registerServiceWorker();
 }
render()
store.subscribe(render)

 






/* import {createStore} from "redux"
const initstate={
    time:0
  
  }
function count(state=initstate,action){
  
  switch(action.type){

   case "加机关枪":
   return {...state,time:state.time+1 }
  
   case "减机关枪":

   return {...state,time:state.time-1 }
   
   default: return {...state,time:0}

  }  
 }
 const store=createStore(count)
 store.subscribe(listen)

 function listen(){
   
    const mystate=store.getState()
    
    console.log(mystate)
 
  }

store.dispatch({type:"加机关枪"})
store.dispatch({type:"加机关枪"})
store.dispatch({type:"加机关枪"})
const get_state=store.getState()
console.log(get_state) */