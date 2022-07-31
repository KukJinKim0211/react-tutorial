import { Component } from 'react';

class EventPracticeClass extends Component {
  state = {
    message: '',
    userName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handlePress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }
  handleClick = () => {
    alert(this.state.userName + ' : ' + this.state.message);
    this.setState({
      message: '',
      userName: ''
    })
  }
  render() {

    return (
      <div>
        <h1>이벤트 연습 클래스컴포넌트</h1>
        <input type="text" name="userName" placeholder="이름입력" value={this.state.userName} onChange={this.handleChange} />
        <input type="text" name="message" placeholder="내용입력" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handlePress} />
        <button onClick={this.handelClick}>확인</button>
      </div>
    )
  }
}

export default EventPracticeClass