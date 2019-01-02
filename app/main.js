import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import Root from './components/Root';
import {Navbar} from './components/Navbar';
import '../public/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root>
        <Navbar />
      </Root>
    </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
