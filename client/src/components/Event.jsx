import React, { Component } from 'react'

export default class Event extends Component {
constructor(){
  super()
  this.state={
    event:''
  }
}

  componentDidMount() {
    this.props.getEvent(this.props.match.params.id);
  }

  render() {
    console.log(this.props.event)
    return (
      <div  class='contact-page-container'>
    
      </div>
    )
  }
}
