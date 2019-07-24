import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProductProvider} from './context';
import {Cleaners_0_5_Provider} from './context_0_5';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Cleaners_0_5_Provider>
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
</Cleaners_0_5_Provider>,

  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
