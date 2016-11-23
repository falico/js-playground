import React from 'react'

const FetchTodosError = ({ message, onRetry }) => (
  <div>
    <p>Unable to fetch todos at this time. <i>{message}</i></p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default FetchTodosError
