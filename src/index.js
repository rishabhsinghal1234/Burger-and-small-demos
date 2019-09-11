import React from "react";
import ReactDOM from "react-dom";
// import { Component } from 'react';
//  import App from './App';
import Form from './form';
// import Burger from './NewApp';

// function App() {
//   return (
//     <div>
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul> 
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul>
//     </div>
//   );
// }

// EXAMPLE FOR SHOWING STATE AND ACCESSING STATE
// class App extends Component{
// state=[{
//   properties:[
//     {name: "rishabh"  , age:"21"}
//   ]
// }]
//   render(){
//     return(
//       <div>
//         Name = {this.state[0].properties[0].name}
//         <br/>
//         Age = {this.state[0].properties[0].age}
//       </div>
//     )
//   }
// }


// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Form />, document.getElementById("root"));
// ReactDOM.render(<Burger />, document.getElementById("root"));
