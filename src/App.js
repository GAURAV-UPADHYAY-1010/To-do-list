import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css'; // Import the CSS file

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoList
        tasks={tasks}
        addTask={addTask}
        removeTask={removeTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
