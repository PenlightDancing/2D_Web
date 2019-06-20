import React, {useEffect, useState} from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import { Main, Mobile } from '../page'

const App: React.FC = () => {
  const [isMobileDevice = false, setBool] = useState()
  function isMobile() {
    var UserAgent = navigator.userAgent;
    if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
    {
        return true;
    }else{
        return false;
    }
  }    
  useEffect (()=>{
      if (isMobile()) setBool( true )
      else setBool ( false )
  })
  return (
    <div className="App">
      <Router>
        <div>
          { !isMobileDevice ? (
            <Route exact path = '/' component = { Main }/>
          ) : (
            <Route exact path = '/' component = { Mobile }/>
          )}
        </div>
      </Router>
    </div>
  )
}

export default App;
