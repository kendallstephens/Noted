import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/brooke.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'react-quill/dist/quill.snow.css'; 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
