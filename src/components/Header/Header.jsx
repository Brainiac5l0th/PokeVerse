import { AppBar, Container, Switch, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.svg';
import useStyle from './style';

const Header = ({ mode, setMode }) => {
  const classes = useStyle();
  return (
    <>
      <AppBar
        position='static'
        color='primary'
        className={classes.marginNeed}>
        <Container>
          <Toolbar className={classes.dflex}>
            <Link to='/'>
              <img src={Logo} alt='logo' className={classes.logo} />
            </Link>
            <div>
              <Typography variant='span' disabled>
                {mode ? "Dark Mode" : 'Light Mode'}
              </Typography>
              <Switch
                color='default'
                size='medium'
                onChange={() => setMode(!mode)}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header