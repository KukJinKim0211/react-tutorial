import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render : 컴포넌트를 페이지에 렌더링하는 역할.
// 파라미터1 : 렌더링할 내용을 JSX를 사용해 작성
// 파라미터2 : 해당 JSX를 렌더링할 documenet 내부 요소 설정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.strickMode : 리액트의 레거시 기능을 사용하지 못하게 하는 기능
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
