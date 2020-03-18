import React from "react";
import BreakingBad from "./components/BreakingBad";
import Navigation from './components/Navigation';
import {Route} from 'react-router-dom';
import background from './components/the-one.jpg';
import './App.css'




export default function App() {
  return (
    <div className="App" >
      <Navigation/>
      <Route exact path='/'>
        <img className='image' src={`${background}`}/>
      </Route>
      <Route path='/find-character-qoutes'>
        <BreakingBad />
      </Route>
    </div>
  );
}
