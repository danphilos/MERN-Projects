// components/Todo.js
import { useState }from "react"; 

function Todo(props) {   
  useState();
  function deleteHandler() {
    //console.log("Clicked!!");
    //console.log(props.text); 
  }
 
  return (
    <div className="card">
      <h2>{props.text}</h2>    {/* Ensures dynamic text are passed*/}
      <div className="actions">
        <button className="btn" onClick={deleteHandler()}>Delete</button>
      </div>
    </div>
  );
}

export default Todo; // Exporting the Todo component



