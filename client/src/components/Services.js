import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

export default class Services extends Component {
  render() {
    return (
      <div class='services-page'>
        <h1 class='about-title'>Services</h1>
        <div class='services'>
          <div class='service'>
            <h3>One Dinner</h3>
            <h4>$249</h4>
            <Button>Book Now</Button>
          </div>
          <br/>
          <div class='service'>
            <h3>Two Dinners</h3>
            <h4>$449</h4>
            <Button>Book Now</Button>
          </div>
          <br/>
          <div class='service'>
            <h3>Three Dinners</h3>
            <h4>$599</h4>
            <h4>20% discount Best Value</h4>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    )
  }
}
