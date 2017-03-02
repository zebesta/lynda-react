import { PropTypes, Component } from 'react'


//stateless
export const AddDayForm = ({resort,
                            date,
                            powder,
                            backcountry }) => {

  // scoped stateless variables that are definied by callback refs
  let _resort, _date, _powder, _backcountry;

  const submit = (e) => {
    e.preventDefault()
    console.log(resort, _resort.value)
    console.log(date, _date.value)
    console.log(powder, _powder.checked)
    console.log(backcountry, _backcountry.checked)
  }

  return (
    <form onSubmit={submit} className="add-day-form">
      <label htmlFor="resort">Resort Name</label>
      <input
        id="resort"
        type="text"
        required
        defaultValue={resort}
        ref={input => _resort = input}/>
      <label htmlFor="date">Date</label>
      <input id="date" type="date" required
        defaultValue={date}
        ref={ input => _date = input }/>

      <div>
        <label htmlFor="powder">Powder Day</label>
        <input
          id="powder"
          type="checkbox"
          defaultChecked={powder}
          ref={ input => _powder = input}/>
        <label htmlFor="backcountry">Backcountry Day</label>
        <input
          id="backcountry"
          type="checkbox"
          defaultChecked={backcountry}
          ref={ input => _backcountry = input}/>
      </div>
      <button>Add Day</button>
    </form>
  )
}


AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-02-12",
  powder: true,
  backcountry: false
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
}
