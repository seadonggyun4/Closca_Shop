import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss'// main style
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 리엑트 코드가 두번 실행되는 버그가 있어 -> React.StrictMode 사용 안함
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
