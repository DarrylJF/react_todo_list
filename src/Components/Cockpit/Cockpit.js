import React, { useEffect } from 'react';
import classes from './Cockpit.module.scss';
import '../Todos/Todos.scss';
import Form from '../Form/Form';
import Button from 'react-bootstrap/Button';



const Cockpit = props => {
  
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  const btnText = props.showTodos ? 'Hide Todos' : 'Show Todos';

  console.log('[Cockpit.js] rendering...')
  return (
    <div className={classes.Cockpit}>
      <h1 className={classes.Cockpit__title}>Todo List</h1>
      <Form addTodo={props.addTodo}/>
      <div className={classes.Cockpit__buttonGroup}>
        {props.filterList}
      </div>
      <div className={classes.Cockpit__showTodos}>
        {props.headingText}
        <Button 
          type="button"
          onClick={props.toggleTodos}
          variant="primary">
            {btnText}
        </Button>
      </div>
    </div>
  )
}

export default Cockpit;
