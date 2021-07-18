import React from 'react';
import { TiTimes } from 'react-icons/ti';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <TiTimes
          onClick={() => onDelete(task.id)}
          style={{ color: 'red', cursor: 'pointer' }}
          size='28px'
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
