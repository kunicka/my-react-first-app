import React from "react";


function ToDoItems(props) {
  return (
    <div>
      
      <p><input type="checkbox" checked={props.item.completed}/>   {props.item.text}</p>
    </div>
  );
}

export default ToDoItems;
