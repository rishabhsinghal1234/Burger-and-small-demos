import React from "react";
import Todo from "./todo";

//import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';



// Comes initially Class Component.
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }


// SHOWS GREETING ACCORDING TO TIME : NO NEED FOR TODO COMPONENT
// function App(){
//   const date = new Date();
//   const hours = date.getHours();
//   let time;
//   if(hours < 12){
//     time = "morning"
//   } else if(hours < 20 && hours >= 12){
//     time = "afternoon"
//   } else{
//     time = "night"
//   }
//   return(
//     <h1 style = {{color: "green"}}>Good {time} </h1>
//   )
// }


// SHOWS IMAGE WITH DATA : TODO 2!
// function App() {
//   return (
//     <div>
//       <Todo
//         img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm"
//         name="Rishabh1"
//         phone="2435"
//         email="rish@gmail"
//       />
//       <Todo
//         img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm"
//         name="Rishabh2"
//         phone="2435"
//         email="rish@gmail"
//       />
//       <Todo
//         img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm"
//         name="Rishabh3"
//         phone="2435"
//         email="rish@gmail"
//       />
//       <Todo
//         img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTVf63Vm3XgOncMVSOy0-jSxdMT8KVJIc8WiWaevuWiPGe0Pm"
//         name="Rishabh4"
//         phone="2435"
//         email="rish@gmail"
//       />
//     </div>
//   );
// }


// SHOWS QUESTION AND ANSWER TODO 3!
export const App = () => {
  var obj =[
    {ques: "q1"},
    {ques: "q2", ans:  "a2"},
    {ans: "a3"},
    {ques: "q4", ans: "a4"},
  ];

  const temp1 = obj.map((ob, index) => {
    return (
      <Todo  key={index} ques={ob.ques} ans={ob.ans} />
    )
  });

  return (
    <div>
      { temp1 }
    </div>
  );

  // return (
  //   <div>
  //       <Todo ques={obj[0].ques}/>
  //       <Todo ques={obj[1].ques} ans={obj[1].ans}/>
  //       <Todo ans={obj[2].ans}/>
  //       <Todo ques={obj[3].ques} ans={obj[3].ans}/>
  //   </div>
  // );
}


// NOT WORKING : TODO 1! 
// const App = () => {
//   var obj = [
//     { text: "text1", completed: false },
//     { text: "text2", completed: true },
//     { text: "text3", completed: false },
//     { text: "text4", completed: true }
//   ];

//   var newArray = obj.map((obj, index) => {
//     return(
//       <Todo key={index} text={obj.text} completed={obj.completed}/>
//     ) 
//   })
//   return(
//     <div>{newArray}</div> 
//   )
// }

export default App;
