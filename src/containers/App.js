import React, { useState } from 'react'
import './App.scss';
import Cockpit from '../components/Cockpit/Cockpit';
import Todos from '../components/Todos/Todos';
import FilterButton from '../components/FilterButton/FilterButton';
import { nanoid } from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../components/Cockpit/Cockpit.module.scss';

console.log(classes);

const FILTER_MAP = {
  All: () => true,
  Active: todo => !todo.completed,
  Completed: todo => todo.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = ( props ) => {
  const [todos, setTodos] = useState(props.todos);
  const [filter, setFilter] = useState('All');
  const [showTodos, setShowTodos]  = useState(false);

  const toggleTodosHandler = ( ) => {
    const doesShow = showTodos;
    setShowTodos(!doesShow);
  }

  const addTodoHandler = ( name ) => {
    const newTodo = {id: 'todo-' + nanoid(), name: name, completed: false};
    setTodos([...todos, newTodo]);
    setShowTodos(true);
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
 
  let todoList = [];
  if ( showTodos ) {
    todoList = <Todos
      todos={todos}
      deleteTodo={deleteTodoHandler}
      editTodo={editTodoHandler}
      toggleCompleted={toggleCompletedHandler}
      filter_map={FILTER_MAP}
      filter={filter}
    />
  }

  console.log(todoList);
  
  
  const filterList = FILTER_NAMES.map( name => (
    <FilterButton 
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}/>
  ));

  
  const todoNoun = todoList !== 1 ? 'todos' : 'todo';
  const headingText = `You have ${todoList.length} ${todoNoun} remaining`;
  const btnText = showTodos === false ? 'Show Todos' : 'Hide Todos';

  return (
    <div className="App">
      <Cockpit
        headingText={headingText}
        btnText={btnText}
        filterList={filterList}
        addTodo={addTodoHandler}
        toggleTodos={toggleTodosHandler}/>
        {todoList}
      </div>
  )
}

export default App;

