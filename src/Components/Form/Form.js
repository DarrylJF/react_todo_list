import React, {useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.scss';

const Input = ( props ) => {
  const [input, setInput] = useState('');

  const onChangeHandler = ( event ) => {
    setInput(event.target.value)
  }

  const onSubmitHandler = ( event ) => {
    event.preventDefault();
    props.addTodo(input);
    setInput('');
  }

  
  return (
      <Form inline className="Form" onSubmit={onSubmitHandler}>
        <Form.Control 
              type="text"
              value={input}
              onChange={onChangeHandler}/>
        <Button 
          type="submit"
          variant="warning"
          disabled={!input}>
            Add
        </Button>
      </Form>
  )
}

export default Input;

