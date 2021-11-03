import React, { Component } from 'react'
// import image1 from '../images/pexels-abigail-olarte-6011998.jpg'
// import image2 from '../images/pexels-ethan-jones-3222401.jpg'
// import image3 from '../images/pexels-olya-prutskova-7121392.jpg'
// import image4 from '../images/pexels-photo-6039238.jpg'

export default class Insights extends Component {
  render() {
    return (
      <div class='insights-container'>
         <div class="vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/589483665?background=1&autoplay=1&loop=1&byline=0&title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
        <div class='insights-page'>
          <br/>
          <h1 class='about-title'>Gallery</h1>
          <br/>
          <div class='gallery'>
           
          </div>
          <div class='gallery'>
            
          </div>
        </div>
      </div>

    )
  }
}