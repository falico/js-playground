import React from 'react';
import ValidateInput from './ValidateInput';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: '',
        error: ''
      }
    }
  }
  updateTitle(e) {
    this.setState({
      title: {
        value: e.target.value,
        error: ''
      }
    })
  }
  validateTitle(e) {
    const value = e.target.value;
    if (value.length > 5) {
      this.setState({
        title: {
          value,
          error: 'Input has exceeded the maximum length'
        }
      })
    } else {
      this.updateTitle(e);
    }
  }
  submitForm() {
    console.log('Submitting form ...');
  }
  render () {
    return (
      <form>
        <ValidateInput
          label='Title'
          placeHolder='Enter title'
          value={this.state.title.value}
          update={this.updateTitle.bind(this)}
          validate={this.validateTitle.bind(this)}
          errorMsg={this.state.title.error} />
        <button type="submit" onClick={this.submitForm.bind(this)}>Submit</button>
      </form>
    )
  }
}

export default Form;
