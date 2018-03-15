import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


import './components/bundle.scss';


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,document.getElementById('root'));
registerServiceWorker();
