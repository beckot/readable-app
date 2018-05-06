import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
