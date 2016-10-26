import React from 'react';

// const App = () => <h1>Stateless function component</h1>

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: 'Component state text' }
  }
  update(e) {
    this.setState({txt: e.target.value })
  }
  render() {
    return (
        <div>
          <h1>{this.props.txt}</h1>
          <p>{this.state.txt}</p>
          <input type='text' onChange={this.update.bind(this)}/>
        </div>
    )
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
