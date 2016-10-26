import React from 'react';

class StatefulWidget extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type='range' min='0' max='255' onChange={this.props.update} />
        {this.props.children}
      </div>
    )
  }
}

export default StatefulWidget
