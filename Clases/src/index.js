import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NotasApp from './clase04/NotasApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NotasApp />, document.getElementById('root'));
registerServiceWorker();
