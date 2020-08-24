import React, { useState } from 'react'
import './Todo.scss';
import Card from 'react-bootstrap/Card';
import {Pencil} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import {Trash} from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';


const Todo = ( props ) => {

  const [newName, setNewName] = useState('');
  const [isEditing, setEditing] = useState(false);

  const onChangeHandler = ( event ) => {
    setNewName(event.target.value);
  }

  const onSubmitHandler = ( event ) => {
    event.preventDefault();
    props.editTodo(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <Card body>
      <Form inline className="Form" onSubmit={onSubmitHandler}>
        <Form.Check type="checkbox"/>
          <div className="todo-text-container">
              <Form.Control 
                    type="text"
                    id={props.id}
                    value={newName}
                    onChange={onChangeHandler}/>
          </div>
        <div className="todo-btn-container">
          <Button
            type="submit"
            variant="secondary">
            Save
          </Button>
          <Button
            type="button"
            variant="info"
            onClick={() => setEditing(false)}>
            Cancel
          </Button>
        </div>
        </Form>
    </Card>
  );

  const viewTemplate = (
    <Card body>
      <Form.Check 
        id={props.id}
        type="checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleCompleted(props.id)}/>
        <div className="todo-text-container">
          {props.name}
        </div>
        <div className="todo-btn-container">
          <Button onClick={() => setEditing(true)}>
            <Pencil />
          </Button>
          <Button>
            <Trash onClick={() => props.deleteTodo(props.id)}/>
          </Button>
        </div>
  </Card>
  );

  return <li>{isEditing ? editingTemplate : viewTemplate}</li>
}

export default Todo;
