import React, { Component } from 'react';
//import {add_gun,remove_gun} from "./index.redux"
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const add_gun=this.props.add_gun
    const remove_gun=this.props.remove_gun
    const store=this.props.store
    const current=store.getState().time
    return (
     /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div> */
      <div>
      <h1 style={{textAlign:"center"}}>数字{current}</h1>
      <button onClick={()=>{store.dispatch(add_gun())}} >加</button>
      <button onClick={()=>{store.dispatch(remove_gun())   }} >减</button>
      </div>
    );
  }
}

export default App;
