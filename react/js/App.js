import React from 'react';
import ReactDOM from 'react-dom';
import StatelessWidget from './StatelessWidget';
import StatefulWidget from './StatefulWidget';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'Component state text',
      red: 0,
      green: 0,
      blue: 0
    }
    this.updateColor = this.updateColor.bind(this)
    this.updateText = this.updateText.bind(this)
  }
  updateColor(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }
  updateText(e) {
    this.setState({
      txt: e.target.value
    })
  }
  render() {
    return (
        <div>
          <h1>{this.props.txt}</h1>
          <StatelessWidget txt={this.state.txt} update={this.updateText} />
          <br/>
          <StatefulWidget ref="red" update={this.updateColor} />
          {this.state.red}
          <br/>
          <StatefulWidget ref="green" update={this.updateColor} />
          {this.state.green}
          <br/>
          <StatefulWidget ref="blue" update={this.updateColor} />
          {this.state.blue}
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
