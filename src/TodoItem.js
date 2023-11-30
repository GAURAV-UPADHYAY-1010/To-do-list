import React from 'react';
import PropTypes from 'prop-types';
import './App'; // Import the CSS file

function TodoItem({ index, task, removeTask, completeTask }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTask(index)}
      />
      <span className={`task-text ${task.completed ? 'completed' : ''}`}>
        {task.text}
      </span>
      <button onClick={() => removeTask(index)}>Delete</button>
    </li>
  );
}

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.object.isRequired,
  removeTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
};

export default TodoItem;
