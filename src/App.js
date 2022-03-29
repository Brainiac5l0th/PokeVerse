import { createTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import About from './components/About/About';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Pokemon from './components/Pokemon/Pokemon';

const App = () => {
  const [mode, setMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      background: {
        default: "hsl(230, 17%, 14%)"
      },
      primary: {
        main: '#91C483',
      },
      secondary: {
        light: '#DEFDE0',
        main: '#97b3e6',
      }
    },
    typography: {
      fontFamily: `"Ubuntu","Roboto", "Helvetica", "Arial", "sans-serif"`,
      fontSize: 12
    }
  });

  const lightTheme = createTheme({
    palette: {
      type: "light",
      background: {
        default: "hsl(0, 0%, 100%)"
      },
      secondary: {
        light: '#DEFDE0',
        main: '#97b3e6',
      }
    },
    typography: {
      fontFamily: `"Ubuntu","Roboto", "Helvetica", "Arial", "sans-serif"`,
      fontSize: 12
    }
  });
  return (
    <>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Router>
          <div>
            <Header mode={mode} setMode={setMode} />
            <Switch>
              <Route exact path="/">
                <Body />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/pokemon/:id">
                <Pokemon />
              </Route>
            </Switch>
            <ScrollToTop
              smooth
              top={500}
              component={<ExpandLessRoundedIcon/>}/>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App