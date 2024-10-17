import React from 'react';

const TodoList = () => {
  const todos = ['Buy groceries', 'Clean the house', 'Do laundry'];

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
