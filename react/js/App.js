import React from 'react';

// const App = () => <h1>Stateless function component</h1>

class App extends React.Component {
  render() {
    return <h1>{this.props.txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'Default text value for property'
}

export default App
