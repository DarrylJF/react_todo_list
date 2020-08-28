import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';

const FilterButton = props => {
  
  useEffect(() => {
    console.log('[FilterButton.js] useEffect');
    return () => {
      console.log('[FilterButton.js] cleanup work in useEffect')
    };
  }, []);

  console.log('[FilterButton.js] rendering...')
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
