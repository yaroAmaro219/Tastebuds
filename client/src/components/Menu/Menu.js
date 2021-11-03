import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/booking" tabIndex={tabIndex}>
        Book Now</a>
        <a href="/login" tabIndex={tabIndex}>
        Login
        </a>
        
      <a href="/gallery" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Gallery
      </a>
      <a href="/about" tabIndex={tabIndex}>
       About 
      </a>
      <a href="/contact" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;