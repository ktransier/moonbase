var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/main')

import {Router, Route} from 'react-router'

ReactDOM.render((
  <Router>
    <Route path="/" component={Main}/>
  </Router>
  ),
  document.getElementById('app')
)