// import React from 'react'
// import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}
import { PropTypes } from 'react'


const calcGoalProgress = (total, goal) =>{
  return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total=70, powder=20, backcountry=10, goal=100}) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span>{total}</span>
        <Calendar />
      <span> total ski days</span>
    </div>
    <div className="powder-days">
      <span>{powder}</span>
        <SnowFlake />
      <span> powder days</span>
    </div>
    <div className="backcountry-days">
      <span>{backcountry}</span>
        <Terrain />
      <span> hiking days</span>
    </div>
    <div>
      <span>
        {calcGoalProgress(total, goal)}
      </span>
    </div>
  </div>
)
SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}
