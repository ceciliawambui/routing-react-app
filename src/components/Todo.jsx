import React from 'react';

const Todo = () => {
  const todos = [
    { id: 1, task: 'Do laundry', completed: false },
    { id: 2, task: 'Buy groceries', completed: true },
    { id: 3, task: 'Clean the house', completed: false },
  ];

  return (
    <div>
      <h3>Completed Tasks</h3>
      <ul>
        {todos
          .filter((todo) => todo.completed) // Only map over completed tasks
          .map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
      </ul>
    </div>
  );
};

export default Todo;
