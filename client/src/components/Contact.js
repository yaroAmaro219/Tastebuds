import React from 'react'
import { Button, Form} from 'react-bootstrap';


export default function Contact () {
    return (
      <>
        <div class='contact-page-container'>
          <div class="vimeo-wrapper">
          </div>
        <div data-aos='fade-down' class='contact1'>
            <h2 class='contact-title'>Get in touch</h2>
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
                        <Form.Label>Message</Form.Label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <br/>
            <Button variant="primary" type="submit" href="mailto:yaroamari@gmail.com@gmail.com">
             Submit
            </Button>
          </Form>
        </div>
      </div>
     </>
    )
  }