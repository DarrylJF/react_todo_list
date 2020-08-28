import React, {useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.scss';

const Input = props => {
  useEffect(() => {
    console.log('[Form.js] useEffect');
    return () => {
      console.log('[Form.js] cleanup work in useEffect')
    };
  }, []);

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
      <Form inline onSubmit={onSubmitHandler}>
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

