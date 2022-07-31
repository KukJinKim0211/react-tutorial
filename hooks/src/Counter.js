import { useReducer } from 'react';

function reducer(state, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'DEC':
      return { value: state.value - 1 };
    case 'INC':
      return { value: state.value + 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>현재 카운터 값 : {state.value}</p>
      <button onClick={() => dispatch({ type: 'DEC' })}>-1</button>
      <button onClick={() => dispatch({ type: 'INC' })}>+1</button>
    </div>
  );
};
export default Counter;