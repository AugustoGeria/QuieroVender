import React from 'react';
import ReactDOM from 'react-dom';
import LinkButton from './components/LinkButton';
import './index.css';
import './components/LinkButton/index'

ReactDOM.render(
  <React.StrictMode>
    <LinkButton text = 'hola' onClick = {()=> console.log('redirect to hola ')}>
    </LinkButton>
    <LinkButton text = 'carrito'>
    </LinkButton>
    <LinkButton text = 'otro'>
    </LinkButton>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

