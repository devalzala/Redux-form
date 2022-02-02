import React from 'react';
import Registration from './redux/Registration';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './redux/Login';


const App = () => {

  return(
    
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Registration}/>
        <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
   
  );
};

export default App;

