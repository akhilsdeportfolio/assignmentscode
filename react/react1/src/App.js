import logo from './logo.svg';
import './App.css';
import { Mobiles } from './components/Mobiles';
import Joinus from './components/Joinus';
import Settings from './components/Settings';
import Login from './components/Login';
import React from 'react';
import Contactus from './components/Contactus';
import Search from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Download from './components/Download';

function App() {
  return (
    <React.Fragment >
    <Mobiles/>


    <div className="flex">
    <Joinus color="red"/>
    <Settings color="green"/>
    <Login color="yellow"/>

    <Contactus color="blue"/>
    <Search color="pink"/>
    <Help color="black"/>

    <Home color="gray"/>
    <Download color="brown"/>
    </div>  
   
    </React.Fragment>
  );
}

export default App;
