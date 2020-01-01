import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import Info from './components/Info';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Join} />
      <Route  path="/chat" component={Chat} />
      <Route  path="/info" component={Info} />
    </React.Fragment>
  );
}

export default App;
