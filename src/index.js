import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/scss/bootstrap.scss'
import Task from './pages/task'


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Task} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();