import React, { useState, useRef } from "react";
import ToDoItems from "./ToDoItems";
import toDosData from "./dataBases/ToDosData";

// function addToDo() {
//   console.log("klik")
//   var newTask = document.getElementById("newTask").nodeValue;
//   var newDiv = document.createAttribute("div");
//   newDiv.appendChild(newTask);
//   document.getElementById("add").appendChild(newDiv);
// }
let count = 5;

function ToDoList() {
  const [itemsArray, setItemsArray] = useState(toDosData);
  //const todoItemsArray = toDosData.map((item) => (
  //  <ToDoItems key={item.id} item={item} />
  //));

  const ref = useRef();


  

  const addTask = () => {
    if (ref.current) {
      console.log("fghj");
      const newArray = [
        ...itemsArray,
        { id: count, text: ref.current.value, completed: NaN },
      ];
      count++;
      setItemsArray(newArray);
    }
  };

  return (
    <div>
      <h2>Rzeczy do zrobienia dzisiaj:</h2>
      <input
        type="text"
        placeholder="Wynieść Śmieci..."
        name="todo"
        ref={ref}
      />
      <button onClick={addTask}>Dodaj Zadanie</button>
      <div className="todo-list" id="add">
        {itemsArray.map((item) => (
          <h3 key={item.id}><input type="checkbox" ></input> {item.id}. {item.text}  </h3>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
