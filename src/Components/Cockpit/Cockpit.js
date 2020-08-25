import React from 'react';
import Form from '../Form/Form';
import Button from 'react-bootstrap/Button';

const Cockpit = ( props ) => {
  return (
      <div className="Cockpit">
        <h1>Todo List</h1>
        <Form addTodo={props.addTodo}/>
        <div className="button-group">
          {props.filterList}
        </div>
        <div className="show-todos-container">
          {props.headingText}
          <Button 
            type="button"
            onClick={props.toggleTodos}
            variant="primary">
              {props.btnText}
          </Button>
        </div>
      </div>
  )
}

export default Cockpit;
