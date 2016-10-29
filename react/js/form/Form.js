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
    const value = e.target.value;
    if (value.length > 5) {
      this.setState({
        title: {
          value,
          error: 'Input has exceeded the maximum length'
        }
      })
    } else {
      this.setState({
        title: {
          value,
          error: ''
        }
      })
    }
  }
  render () {
    return (
      <form>
        <ValidateInput
          label='Title'
          placeHolder='Enter title'
          value={this.state.title.value}
          update={this.updateTitle.bind(this)}
          errorMsg={this.state.title.error} />
      </form>
    )
  }
}

export default Form;
