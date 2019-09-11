import React from "react";
  
// TODO 1!
// function Tool(props){
//   console.log(props);
//     return(
//         <div>
//             <input 
//             type="checkbox" 
//             checked={props.completed}
//             onChange={() => {console.log("changed"); props.handleChange(props.id)}}
//             />
//             <p>{props.text}</p>
//         </div>
//     )
//   }

// TODO 2!
// function Tool(props) {
//     console.log(props);
//   return (
//     <div>
//       <img src={props.img} alt="Smiley face"/>
//       <h3>{props.name}</h3>
//       <p>{props.phone}</p>
//       <p>{props.email}</p>
//     </div>
//   );
// }

// TODO 3!
function Tool(props) {
  // console.log(props);
  return (
    <div style={{display: 'inline-block' , margin: '20px'}} >
      <h3 style={{display: !props.ques && "none"}}>Question: {props.ques}</h3>
      <h3 style={{display: props.ans ? "block" : "none"}}>Answer: {props.ans}</h3>
      <hr/>
    </div>
  );
}

export default Tool;
