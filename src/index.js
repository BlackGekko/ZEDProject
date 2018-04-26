import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './stylesheet.css';
import './css/foundation.css';
import './css/app.css';
import './canvas.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();
