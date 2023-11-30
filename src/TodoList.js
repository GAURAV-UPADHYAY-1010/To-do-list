import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './App.css';

function TodoList({ tasks, addTask, removeTask, completeTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask({ text: newTask, completed: false });
      setNewTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div>
      <div className="add-task-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="New Task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            removeTask={removeTask}
            completeTask={completeTask}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
};

export default TodoList;
