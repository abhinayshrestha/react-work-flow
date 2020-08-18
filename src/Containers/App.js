import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

function App({ isAuth, checkAuth }) {

  const theme = createMuiTheme({
    palette : {
        primary : {
            main : '#311b92'
        },
        secondary : {
            main : '#f44336'
        },
        text : {
            primary : '#000',
            hint : '#9e9e9e'
        }
    }
  })

  return (
          <MuiThemeProvider theme={theme} >  
              <ThemeProvider theme={theme} >
                      Hellow World
              </ThemeProvider> 
          </MuiThemeProvider> 
     );
}

export default App;