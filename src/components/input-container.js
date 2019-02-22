import React, { Component } from 'react'

class InputContainer extends Component {
  render() {
    return (
      <div
          className={(!this.props.valid ? 'invalid' : '') + " input-container " + this.props.type}
      >
        {this.props.children}
        <label className="error-msg">
            {this.props.errorMessage}
        </label>
        {
          this.props.hintMessage ?
              <label className="hint-msg">
                  {this.props.hintMessage}
              </label>
              : <div />
        }
      </div>
    )
  }
}

export default InputContainer

