import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import { Main, LoginPage } from '../page'

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path = '/' component = { Main }/>
          <Route exact path = '/login' component = { LoginPage}/>
        </div>
      </Router>
    </div>
  )
}

export default App;
