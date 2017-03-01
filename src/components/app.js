import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

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
          backcountry: true
        }
      ]
    }
  }

  countDays(filter) {
    const { allSkiDays } = this.state
    return allSkiDays.filter((day)=> (filter) ? day[filter] : day).length
  }

  render(){
    return (
      <div className="app">
      <Menu />
      {(this.props.location.pathname === '/') ?
          <SkiDayCount total={this.countDays()}
                        powder={this.countDays("powder")}
                        backcountry={this.countDays("backcountry")}/> :
          (this.props.location.pathname === '/add-day') ?
          <AddDayForm></AddDayForm> :
          <SkiDayList days={this.state.allSkiDays}
                      filter={this.props.params.filter}/>


                  }
        <SkiDayList days={this.state.allSkiDays}/>

      </div>
    )
  }
}
