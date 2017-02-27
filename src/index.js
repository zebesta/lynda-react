import React from 'react'
import { render } from 'react-dom'
// import { SkiDayCount } from './components/SkiDayCount'
import { SkiDayList } from './components/SkiDayList'
import { App } from './components/app'

window.React = React

// render(
//   <SkiDayCount total={false}/>,
//   document.getElementById('react-container')
// )
render(
  <App/>,
  document.getElementById('react-container')
)
