import React from 'react';
import Mixin from './Mixin';

const Button = (props) => {
  return (
      <button onClick={props.update}>
        {props.text} - {props.val}
      </button>
  )
}

export default Mixin(Button)
