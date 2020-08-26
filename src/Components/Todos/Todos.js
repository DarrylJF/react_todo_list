import React from 'react';
import Todo from './Todo/Todo'

const Todos = ( props ) => {
  return props.todos
    .filter(props.filter_map[props.filter])
    .map(todo => {
      return (
        <Todo 
        id={todo.id}
        name={todo.name}
        completed={todo.completed}
        key={todo.id}
        deleteTodo={props.deleteTodo}
        editTodo={props.editTodo}
        toggleCompleted={props.toggleCompleted}
        />
      );
    });
  };

export default Todos;
