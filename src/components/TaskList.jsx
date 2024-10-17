import React from 'react';

const TaskList = () => {
  const tasks = [
    { id: 1, task: 'Do laundry', completed: true },
    { id: 2, task: 'Buy groceries', completed: false },
    { id: 3, task: 'Pay bills', completed: false }
  ];

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.task} - {task.completed ? 'Completed' : 'Incomplete'}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
