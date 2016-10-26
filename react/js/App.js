import React from 'react';
import ReactDOM from 'react-dom';
import StatelessWidget from './StatelessWidget';
import NumberInput from './NumberInput';
import ButtonMixed from './ButtonMixed';
import LabelMixed from './LabelMixed';

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
      red: ReactDOM.findDOMNode(this.refs.red.refs.ui_control).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.ui_control).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.ui_control).value
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
          <NumberInput
            ref="red"
            min={0}
            max={255}
            step={1}
            val={+this.state.red}
            label="Red"
            update={this.updateColor} />
          <br/>
          <NumberInput
            ref="green"
            min={0}
            max={255}
            step={1}
            val={+this.state.green}
            label="Green"
            update={this.updateColor} />
          <br/>
          <NumberInput
            ref="blue"
            min={0}
            max={255}
            step={1}
            val={+this.state.blue}
            label="Blue"
            update={this.updateColor} />
          <br/>
          <ButtonMixed text='Clickable button' />
          <LabelMixed text='Mouseover label' />
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
