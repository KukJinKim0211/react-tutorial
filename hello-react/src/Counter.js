// 클래스 컴포넌트를 이용한 state 관리
import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={() => {
          this.setState(prevState =>
            ({ number: prevState.number + 2 }),
            () => { alert(this.state.number) })
        }}>
          +2
        </button>
      </div >
    );
  }
}

export default Counter;