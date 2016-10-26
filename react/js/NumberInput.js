import React from 'react';

// Example of a stateful component that is reusable and composable
class NumberInput extends React.Component {
  constructor() {
    super();
  }
  componentWillReceiveProps(nextProps) {
    console.log('Props updated', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    const doUpdate = nextProps.val !== this.props.val;
    if (doUpdate) {
      console.log('Updating component ...');
    }
    return doUpdate;
  }
  render() {
    let label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : 'Default text'
    return (
      <div>
        <input
          ref="ui_control"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} />
        {label}
      </div>
    )
  }
}

NumberInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumberInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'number'
}

export default NumberInput
