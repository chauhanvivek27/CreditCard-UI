import React  from 'react';
import  ReactDOM  from 'react-dom';
import App from '../components/header/index';
require('./index.css');

console.log('Start React');
const rootEl = document.getElementById('app');


ReactDOM.render(<App />, rootEl);

if (module.hot) {
    module.hot.accept();
}