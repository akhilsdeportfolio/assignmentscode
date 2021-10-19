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
import Button from './components/Button';
function App() {
  return (
    <React.Fragment >
    <Mobiles/>

    <h1>Using Individual Components for each Button</h1>
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
    <h1>Using One component for all buttons</h1>

    <div className="flex">

      <Button text="Join us " color="yellow"/>
      <Button text="Help" color="skyblue"/>
      <Button text="Contact us " color="gray"/>
      <Button text="Home" color="green"/>
      <Button text="Search" color="black"/>
      <Button text="Login" color="blue"/>
      <Button text="Settings " color="pink"/>
      <Button text="Download" color="brown"/>

    </div>
   
    </React.Fragment>
  );
}

export default App;
