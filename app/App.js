var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/main');
var Moon = require('./components/moon')

import {Router, Route} from 'react-router'

ReactDOM.render((
  <Router>
    <Route path="/" component={Main}>
      <Route path="/moons/:name" component={Moon}/>
    </Route>
  </Router>
  ),
  document.getElementById('app')
)