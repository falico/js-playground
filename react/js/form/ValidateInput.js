import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label>
        <span>{this.props.label}</span>
        <input
          ref='input'
          type='text'
          value={this.props.value}
          placeholder={this.props.placeHolder}
          onChange={this.props.update} />
      </label>
    )
  }
}

ValidateInput.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  placeHolder: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
}

ValidateInput.defaultProps = {
  label: '',
  value: '',
  placeHolder: ''
}

export default ValidateInput
