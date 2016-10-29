import React from 'react';
import ValidateInput from './ValidateInput';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  update(e) {
    this.setState({
      title: e.target.value
    })
  }
  render () {
    return (
      <form>
        <ValidateInput
          label='Title'
          placeHolder='Enter title'
          value={this.state.title}
          update={this.update.bind(this)}/>
      </form>
    )
  }
}

export default Form;
