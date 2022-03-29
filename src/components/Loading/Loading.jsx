import React from 'react';
import useStyle from './style';
const Loading = ()=> {
    const classes = useStyle();
  return (
      <img src="../simple_pokeball.gif" alt="Loading" className={classes.loading}/>
    )
}

export default Loading