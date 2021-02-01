import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

//pages
import home from './pages/home';
import albums from './pages/albums';
import songs from './pages/songs';
import { createMuiTheme } from '@material-ui/core';
import axios from 'axios';

const theme = createMuiTheme({
  typography:{
    useNextVariants: true
  }
})

axios.defaults.baseURL = 'https://us-central1-musicstore-c46d3.cloudfunctions.net/api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path = "/albums" component = {albums}/>
              <Route path = "/songs" component = {songs}/>
              <Route path = "/" component = {home}/>
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  } 
}

export default App;
