import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  inputt = React.createRef();
  state = {
    password: '',
    clicked: false,
    validated: false
  }
  handleChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    })
    this.inputt.current.focus();
  }
  render() {
    return (
      <div>
        <h1>패스워드 '0000' 검증하기</h1>
        <input type="password" ref={this.inputt} value={this.state.password} onChange={this.handleChange} className={this.state.clicked ? (this.state.validated ? 'sucess' : 'failure') : ''} />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    )
  }
}
export default ValidationSample;