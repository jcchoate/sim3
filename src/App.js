import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import UserPage from './UserPage';
import Unnecessary from './Unnecessary';
import dashboard from "./dasboard"

class App extends Component {
 

  render() {
    return (
      <div className="App">

        <HashRouter>
          <Switch>
            <Route path="/" exact component={UserPage} />
            <Route path="/unnecessary/:num" component={Unnecessary} />
            <Route path="/dashboard/:loggedin" component={dashboard}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
