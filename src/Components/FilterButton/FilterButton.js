import React from 'react';
import './FilterButton.scss';
import Button from 'react-bootstrap/Button';

const FilterButton = ( props ) => {
  return (
    <Button
      variant="success" 
      type="button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
        <span>{props.name}</span>
    </Button>
  )
}

export default FilterButton;
