import React from 'react';

// Stateless function component
const Widget = (props) => {
  return (
      <div>
        <strong>{props.txt}</strong>
        <input type='text' onChange={props.update}/>
      </div>
  )
}

export default Widget
