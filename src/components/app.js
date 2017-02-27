import { createClass } from 'react'

export const App = createClass({
  getInitialState() {
    return {
      allSkiDays: [
        {
          resort: "Squaw Calley",
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
  },
  render(){
    return (
      <div className="app">
        {this.state.allSkiDays[0]["resort"]}
      </div>
    )
  }
})
