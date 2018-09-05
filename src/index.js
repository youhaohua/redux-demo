import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {count, add_gun, remove_gun, addAsync} from "./index.redux"
const store = createStore(count, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f))

ReactDOM.render((
    <Provider store={store} >
        <App/></Provider>
), document.getElementById('root'));
registerServiceWorker();

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