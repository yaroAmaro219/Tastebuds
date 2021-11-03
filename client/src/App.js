import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AOS from 'aos';
import 'aos/dist/aos.css';
import cloud from './images/197-cloud-check.svg'
import stack from './images/047-stack.svg'
import Home from './components/Home'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Event from './components/Event'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import Login from './pages/Login'
import Nav from './components/Nav1'
import {
  showEvents,
  showEvent
} from './services/apiHelper'

class App extends Component {
constructor() {
  super()
  this.state={
    events:'',
    event:''
  }
}

  componentDidMount=()=>{
    AOS.init({
      duration: 600,
    });
    this.getEvents()
  }

  getEvents = async () => {
    const events = await showEvents();
    if (events) {
      this.setState({ events })
    }
  }

  getEvent = async (id) => {
    const event = await showEvent(id);
    if (event) {
      this.setState({ event })
    }
  }
  
  render() {
    return (
      <div>
        <Nav />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames='fade'>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" render={About} />
                <Route exact path="/contact" render={(props) => 
                <Contact
                  {...props}
                />}/>
                <Route exact path="/gallery" render={Gallery} />
                <Route exact path="/reviews" render={Reviews} />
                <Route exact path="/services" render={Services} />
                <Route exact path="/events" render={(props) => 
                <Events
                  events={this.state.events}
                  getEvents={this.getEvents}
                  {...props}
                />} />
                <Route exact path="/login" render={Login} />
                <Route exact path="/events/:id" render={(props) => 
                <Event 
                  event={this.state.event}
                  getEvent={this.getEvent}
                  {...props}
                />
                }/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        <div class='container'>
          <a class='mobile' href='/events'><img class='img-nav' src={cloud} />Book Now</a>
          <a class='mobile1' href='/contact'><img class='img-nav' src={stack} />Contact</a>
        </div>
        <div class='footer-container'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(App);