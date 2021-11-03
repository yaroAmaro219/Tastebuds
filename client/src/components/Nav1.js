import {useState}  from 'react'
import Nav from './Nav'
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import Tastebuds from '../images/Tlogo.png'

function Nav1 () {
  const [change, setChange] = useState(false);
  const changePosition = 10;
  
  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: change ? "white" : "transparent",
    transition: ".3s ease",
    height: "99px",
    position: "fixed",
    right: 0,
    left: 0,
    top: 0,
  };
 
 let style2 = {
   color: change ? "#464646" : "white", 
 }

 let navtext = {
   width: '100%',
   display: 'flex',
   margin: ' 0 0 0 auto',
 }
  
 return (
  <div style={style} class="nav-container">
    <div class='title1-container'>
       <a data-aos='fade-down' style={style2} class='nav-title' href='/'><img class='nav-title' src={Tastebuds}/></a>
      {/* <a style={style2} class='nav-title1' href='/'>Connecting People with Food</a> */}
    </div>
    <div style={navtext} class='nav-text'>
        <a style={style2} class='link' href='/services'>Find A Group</a>
      {/* <div class="dropdown">
        <a style={style2} class='link' href='/portfolio'>Locations</a>
        <div class="dropdown-content-mini">
          <div class="dropdown-content1">
            <div class='dropdown-column'>
            <a class='dropdown-main' href='/write-a-biography'>Manhattan</a>
              <a class='dropdown-main' href='/book-editing'>Brooklyn</a> 
               <a class='dropdown-main' href='/corporate-reports'>Queens</a> 
            </div>
            </div>
          </div>
        </div> */}
      <div class="dropdown">
        <a style={style2} class='link' href='/about'>About</a>
        <div class="dropdown-content-mini">
          <div class="dropdown-content1">
            <div class='dropdown-column'>
              <a class='dropdown-main' href='/about'>About </a>
              <a class='dropdown-main' href='/blog'>Blog</a> 
              <a class='dropdown-main' href='/contact'>Reviews</a> 
            </div>
            </div>
          </div>
        </div>
      <a  class='contact11' href='/contact'>Contact</a>
      </div>
    <div>
      <Nav/>
    </div>
    </div>
  );
}

export default Nav1;