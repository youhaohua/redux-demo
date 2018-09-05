import React, { Component } from 'react';
//import {add_gun,remove_gun} from "./index.redux"
import logo from './logo.svg';
import './App.css';
import {add_gun,remove_gun,addAsync} from "./index.redux"
import {connect} from "react-redux"
@connect(
    
  state=>( {num:state.time } ),
  {add_gun,remove_gun,addAsync}

 )
class App extends Component {

  render() {
    const num=this.props.num
    const add_gun=this.props.add_gun
    const remove_gun=this.props.remove_gun
    const addAsync=this.props.addAsync
    const store=this.props.store
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
      <h1 style={{textAlign:"center"}}>数字{num}</h1>
      <button onClick={add_gun} >加</button>
      <button onClick={remove_gun} >减</button>
      <button onClick={addAsync} >异步</button>
      </div>
    );
  }
}
/* const mapStatetoProps=(state)=>{
    
     return {num:state.time}
}
const actionCreators={
  add_gun,remove_gun,addAsync

}
App=connect(mapStatetoProps,actionCreators)(App) */
export default App;
