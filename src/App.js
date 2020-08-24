import React, { useState } from 'react'
import './App.scss';
import Form from './Components/Form/Form';
import Todo from './Components/Todo/Todo';
import FilterButton from './Components/FilterButton/FilterButton';
import { nanoid } from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';

const FILTER_MAP = {
  All: () => true,
  Active: todo => !todo.completed,
  Completed: todo => todo.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = ( props ) => {
  const [todos, setTodos] = useState(props.todos);
  const [filter, setFilter] = useState('All');

  const addTodoHandler = ( name ) => {
    const newTodo = {id: 'todo-' + nanoid(), name: name, completed: false};
    setTodos([...todos, newTodo]);
  }

  const deleteTodoHandler = ( id ) => {
    const remainingTasks = todos.filter(task => id !== task.id);
    setTodos(remainingTasks);
  };

  const editTodoHandler = ( id, newName ) => {
    const editedTodos = todos.map(todo => {
      if ( id === todo.id ) {
        return {...todo, name: newName}
      }
      return todo;
    });
    setTodos(editedTodos);
  }

  const toggleCompletedHandler = ( id ) => {
    const updatedTodos = todos.map(todo => {
      if (id === todo.id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  const todoList = todos
  .filter(FILTER_MAP[filter])
  .map(todo => (
    <Todo 
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      key={todo.id}
      deleteTodo={deleteTodoHandler}
      editTodo={editTodoHandler}
      toggleCompleted={toggleCompletedHandler}
      />
  ));

  const filterList = FILTER_NAMES.map( name => (
    <FilterButton 
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}/>
  ));

  const todoNoun = todoList.length !== 1 ? 'todos' : 'todo';
  const headingText = `You have ${todoList.length} ${todoNoun} remaining`;

  return (
    <div className="App">
      <div className="App-container">
        <h1>Todo List</h1>
        <Form addTodo={addTodoHandler}/>
        <div className="button-group">
          {filterList}
        </div>
          {headingText}
        <ul>
          {todoList}
        </ul>
      </div>
    </div>
  )
}

export default App;

