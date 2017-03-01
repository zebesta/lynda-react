import React from 'react'
import { render } from 'react-dom'
// import { SkiDayCount } from './components/SkiDayCount'
import { SkiDayList } from './components/SkiDayList'
import { App } from './components/app'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

// render(
//   <SkiDayCount total={false}/>,
//   document.getElementById('react-container')
// )
render(
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='*' component={Whoops404}/>
  </Router>,
  document.getElementById('react-container')
)
