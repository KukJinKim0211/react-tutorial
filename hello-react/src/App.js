import { Component } from 'react';
/*
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPracticeClass from "./EventPracticeClass";
import EventPracticeFunction from "./EventPracticeFunction";
*/
import ValidationSample from "./ValidationSample";
import CreateRefSample from "./CreateRefSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
//import './App.css';

/*
const App = () => {
  return (
    <div>
      <MyComponent name="" age={3} />
      <Counter />
      <Say />
      <EventPracticeClass />
      <EventPracticeFunction />
      <ValidationSample />
    </div>
  );
};*/


class App extends Component {
  render() {
    return (
      <div>

        <ValidationSample />
        <CreateRefSample />
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <IterationSample />
      </div>
    );
  }
}


export default App;