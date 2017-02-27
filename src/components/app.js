import { Component } from 'react'
import { SkiDayList } from './skidaylist'
import { SkiDayCount } from './skidaycount'

export class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      allSkiDays: [
        {
          resort: "Squaw Valley",
          date: new Date("1/2/2016"),
          powder: true,
          backcountry: false
        },
        {
          resort: "Vail",
          date: new Date("1/16/2016"),
          powder: false,
          backcountry: false
        },
        {
          resort: "Squaw Valley",
          date: new Date("2/20/2016"),
          powder: false,
          backcountry: true
        },
        {
          resort: "Beaver Creek",
          date: new Date("2/30/2016"),
          powder: false,
          backcountry: false
        },
        {
          resort: "Breckenridge",
          date: new Date("3/20/2016"),
          powder: true,
          backcountry: false
        }
      ]
    }
  }

  countDays(filter) {
    const { allSkiDays } = this.state
    return allSkiDays.filter((day)=>{return (filter) ? day[filter] : day}).length
  }

  render(){
    return (
      <div className="app">
        <SkiDayList days={this.state.allSkiDays}/>
        <SkiDayCount total={this.countDays()}
                      powder={this.countDays("powder")}
                      backcountry={this.countDays("backcountry")}/>
      </div>
    )
  }
}
