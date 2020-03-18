import React from "react";
import BreakingBad from "./components/BreakingBad";
import Navigation from './components/Navigation';
import {Route} from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Navigation/>
      <Route exact path='/'>

      </Route>
      <Route path='/find-character-qoutes'>
        <BreakingBad />
      </Route>
    </div>
  );
}
