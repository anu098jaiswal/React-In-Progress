import React from "react";
import { useState } from "react";
import "./style.css";

function TodoList() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function handleClick() {
    const item = {
      id: todo.length + 1,
      text: input,
      completed: true,
    };
    setTodo([...todo, item]);
    setInput("");
  }
  function toggleCompleted(id) {
    const updatedTodos = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(updatedTodos);
  }

  function handleDelete(id){
    const updatedTodos = todo.filter((item) => item.id !== id);
    setTodo(updatedTodos);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="enter a text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add
      </button>
      <ul>
        {todo.map((value) => (
          <li key={value.id}>
            <input
              type="checkbox"
              checked={value.completed}
              onChange={() => toggleCompleted(value.id)}
            />
            <span className={value.completed ? "strike" : ""}>
              {value.text}
            </span>
            <button onClick={()=>handleDelete(value.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
