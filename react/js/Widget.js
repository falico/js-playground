import React from 'react';

const Widget = (props) => {
  return (
      <div>
        <strong>{props.txt}</strong>
        <input type='text' onChange={props.update}/>
      </div>
  )
}

export default Widget
