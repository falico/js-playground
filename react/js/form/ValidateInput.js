import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validate: false
    }
    this.startValidating = this.startValidating.bind(this);
    this.validate = this.validate.bind(this);
  }
  startValidating(e) {
    if (!this.state.validate) {
      e.persist();
      // After first blur, start validating field on change
      this.setState({
        validate: true
      }, () => {
        this.validate(e)
      })
    }
  }
  validate(e) {
    if (this.state.validate) {
      this.props.validate(e);
    } else {
      this.props.update(e);
    }
  }
  render() {
    var error = this.props.errorMsg ?
      <div className="error">{this.props.errorMsg}</div> : '';
    return (
      <div>
        <label>
          <span>{this.props.label}</span>
          <input
            ref='input'
            type='text'
            value={this.props.value}
            placeholder={this.props.placeHolder}
            onChange={this.validate}
            onBlur={this.startValidating} />
        </label>
        {error}
      </div>
    )
  }
}

ValidateInput.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  placeHolder: React.PropTypes.string,
  errorMsg: React.PropTypes.string
}

ValidateInput.defaultProps = {
  label: '',
  value: '',
  placeHolder: ''
}

export default ValidateInput
