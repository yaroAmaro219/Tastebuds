import React, {Component, Link} from 'react'
// import Mailchimp from './Mailchimp'

export default class Events extends Component {
  constructor() {
    super();
    this.state = {
      event: '',
    }
  }

  componentDidMount() {
    this.props.getEvents()
  }

  event(e) {
    var id = this.props.event
      ?
      this.props.event.id
      :
      null
    return ([id])
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }

  render(){
    console.log(this.props.event)
    const event =
    this.props.event
    &&
    this.props.event.map((enroll, index) => {
      return (
      //  <Link to={`/events/${enroll.id}`}>
        <div class='event'>
          <h2>{`Name: ${enroll.name}`}</h2>
          <h2>{`Location: ${enroll.location}`}</h2>
          <h2>{`Date: ${enroll.date}`}</h2>
          <h2>{`Time: ${enroll.time}`}</h2>
          <h2>{`Price: ${enroll.price}`}</h2>
          <a href={`/events/${enroll.id}`}><button>Attend A Dinner</button></a>
        </div>
    
      )
    }).reverse();
  return (
    <div class='contact-page-container'>
      <h1 id='h1-event'>Events</h1>
      {event}
    </div>
  )
}
}
