import React from 'react';
import useStyle from './style';
const Footer = ()=> {
  const classes= useStyle();
  return (
    <div className={classes.footer}>
      Made With Love By <a href="https://www.linkedin.com/in/shawon-talukder/" target='_blank' rel="noreferrer" className={classes.anchor}>Shawon Talukder</a> 
    </div>
  )
}

export default Footer