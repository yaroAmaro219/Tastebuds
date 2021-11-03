import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/Footer.css'
import './styles/Home.css'
import './styles/Nav.css'
import './styles/Contact.css'
import './styles/Insights.css'
import './styles/About.css'
import './styles/Services.css'
import './styles/Hero.css'
import './App.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

