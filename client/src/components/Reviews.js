import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export default class Reviews extends Component {
  render() {
    return (
      <div class='contact-page-container'>
        <div class="vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/589483665?background=1&autoplay=1&loop=1&byline=0&title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        <div class='contact1'>
          <h2 class='contact-title'>Reviews</h2>
          <br/>
            <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
              <br />
              <Form.Label>Email address</Form.Label>
              <Form.Group  controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone.
    </Form.Text>
              </Form.Group>
              
              <Form.Label>Review</Form.Label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
 
              {/* <>
              <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
                </FloatingLabel>
                </> */}
            <br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
          </Form>
            {/* <form>
          <div class='inputs'>
              <h3 class='input-name'>Name*</h3>
              <div class='contact-name'>
              <div class='first-name'>
                <input class='input1' onChange={this.handleChange} />
                <h5 class='sub-name'>First Name</h5>
              </div>
              <div  class='first-name'>
                  <input class='input1' onChange={this.handleChange} />
                  <h5 class='sub-name'>Last Name</h5>
                </div>
                </div>
            <h3 class='input-name'>Email*</h3>
            <input class='input1' placeholder='Email' onChange={this.handleChange}/>
            <h3 class='input-name'>Message*</h3>
              <textarea class='comments' placeholder='Type your message here...' onChange={this.handleChange} />
              <>
                <Button variant="outline-primary" size="lg">Primary</Button>{' '}
                </>
              </div>
              </form> */}
          {/* <div class='contact3'>
            <h2>Brooklyn, New York 219 19th Street 11232</h2>
          <h1><a class='phone' href='tel:3474006623'>347-400-6623</a></h1>
            <h3><a class='phone' href="mailto:convertedcamper@gmail.com">GlassTop@gmail.com</a></h3>
            </div> */}
        </div>
      </div>
    )
  }
}
