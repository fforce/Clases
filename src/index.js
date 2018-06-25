import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RelojApp from './clase05/EJERCICIO';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RelojApp />, document.getElementById('root'));
registerServiceWorker();
