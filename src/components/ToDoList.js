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
        { id: 10, text: ref.current.value, completed: true },
      ];
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
          <p key={item.id}> {item.text} </p>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
