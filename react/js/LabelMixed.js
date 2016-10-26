import React from 'react';
import Mixin from './Mixin';

const Label = (props) => {
  return (
      <label onMouseOver={props.update}>
        {props.text} - {props.val}
      </label>
  )
}

export default Mixin(Label)
