import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    //Link,
  } from 'react-router-dom'
import HomeComponent from './Components/Home';
  let CustomRoutes =()=>(
      <Router>
          <div>
              <Route exact path='/' component={HomeComponent} />
          </div>
      </Router>
  );
  export default CustomRoutes