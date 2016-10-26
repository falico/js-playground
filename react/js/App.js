import React from 'react';
import Widget from './Widget';

class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: 'Component state text' }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({txt: e.target.value })
  }
  render() {
    return (
        <div>
          <h1>{this.props.txt}</h1>
          <Widget txt={this.state.txt} update={this.update} />
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
