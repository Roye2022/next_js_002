import { useState } from "react";
import Todo from '../components/todolist/Todo';
import '../styles/todolist.css';

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue.trim()]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const droppedIndex = e.dataTransfer.getData("text/plain");
    if (droppedIndex !== index) {
      const newTodos = [...todos];
      const draggedTodo = newTodos[draggedIndex];
      newTodos.splice(draggedIndex, 1);
      newTodos.splice(index, 0, draggedTodo);
      setTodos(newTodos);
    }
    setDraggedIndex(null);
  };

  return (
    <div>
      <h1>My Todos</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            text={todo}
            onDeleteTodo={handleDeleteTodo}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
