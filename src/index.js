import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount-createClass'
// import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
  <SkiDayCount total="omg Im a string!"/>,
  document.getElementById('react-container')
)
// render(
//   <SkiDayList days={
//     [
//       {
//         resort: "Squaw Calley",
//         date: new Date("1/2/2016"),
//         powder: true,
//         backcountry: false
//       },
//       {
//         resort: "Vail",
//         date: new Date("1/16/2016"),
//         powder: false,
//         backcountry: false
//       },
//       {
//         resort: "Squaw Valley",
//         date: new Date("2/20/2016"),
//         powder: false,
//         backcountry: true
//       },
//       {
//         resort: "Beaver Creek",
//         date: new Date("2/30/2016"),
//         powder: false,
//         backcountry: false
//       },
//       {
//         resort: "Breckenridge",
//         date: new Date("3/20/2016"),
//         powder: true,
//         backcountry: false
//       }
//     ]
//   }
//   />,
//   document.getElementById('react-container')
// )
