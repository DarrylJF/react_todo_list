import React, {useEffect} from 'react';
import Todo from './Todo/Todo'

const Todos = props => {
  useEffect(() => {
    console.log('[Todos.js] useEffect');
    return () => {
      console.log('[Todos.js] cleanup work in useEffect')
    };
  });

  console.log('[Todos.js] rendering...')
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
