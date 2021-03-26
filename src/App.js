import React, { Component } from 'react';
import Blog from './containers/Blog/Blog';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      
      // wrap where we want to use routing
     <BrowserRouter> 
     <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
