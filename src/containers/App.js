import React, { useState, useEffect } from 'react';
import Auxillary from '../hoc/Auxillary';
import withClass from '../hoc/withClass';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import Cockpit from '../components/Cockpit/Cockpit';
import Todos from '../components/Todos/Todos';
import FilterButton from '../components/FilterButton/FilterButton';
import classes from './App.module.scss';


const FILTER_MAP = {
  All: () => true,
  Active: todo => !todo.completed,
  Completed: todo => todo.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

const App = ( props ) => {
  useEffect(() => {
    console.log('[App.js] useEffect');
    return () => {
      console.log('[App.js] cleanup work in useEffect')
    };
  });

  const [todos, setTodos] = useState(props.todos);
  const [filter, setFilter] = useState('All');
  const [showTodos, setShowTodos]  = useState(false);
  const [showCockpit, setShowCockpit] = useState(true);

  const toggleTodosHandler = ( ) => {
    const doesShow = showTodos;
    setShowTodos(!doesShow);
  }

  const toggleCockpitHandler = () => {
    const doesShow = showCockpit;
    setShowCockpit(!doesShow);
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
  
  const filterList = FILTER_NAMES.map( name => (
    <FilterButton 
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}/>
  ));

  const btnStyle = {
    marginTop: '1rem'
  };

  const todoNoun = todoList !== 1 ? 'todos' : 'todo';
  const headingText = `You have ${todoList.length} ${todoNoun} remaining`;
  const btnTxt = showCockpit ? 'Hide Cockpit' : 'Show Cockpit';
  console.log('[App.js] rendering...');

  return (
    <Auxillary>
      <button style={btnStyle} onClick={toggleCockpitHandler}>
        <span>{btnTxt}</span>
      </button>
      {showCockpit ?
      <Cockpit
        headingText={headingText}
        filterList={filterList}
        addTodo={addTodoHandler}
        toggleTodos={toggleTodosHandler}
        showTodos={showTodos}
        /> : null}
        {todoList}
      </Auxillary>
  )
}

export default withClass(App, classes.App);

