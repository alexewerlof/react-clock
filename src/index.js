import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

import Clock from './view/Clock';
import { color } from './settings';

document.body.style.backgroundColor = color.bg;

/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(() => console.log('Service Worker Registered'));
}
*/

ReactDOM.render(<Clock />, document.getElementById('root'));
//registerServiceWorker();
