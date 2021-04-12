import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

import './index.scss';
import styles from './App.scss';

ReactDOM.render(
  <React.StrictMode>
    <App classeName={styles.App} />
  </React.StrictMode>,
  document.getElementById('root'),
);
