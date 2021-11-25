import React from 'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {
  return (

   <BrowserRouter>
      
      <Switch>
        
        <Route exact path="/">
                <NavBar />
                <h1>Welcome to Home Page</h1>
        </Route>
        <Route  path="/contact">
                <NavBar hide="home"/>
                <h1>Welcome to Contact Page</h1>
        </Route>
        <Route  path="/login">
                <NavBar hide="home"/>
                <h1>Welcome to Login Page</h1>
        </Route>
        <Route  path="/about-us">
                <NavBar hide="home"/>
                <h1>Welcome to About page</h1>
        </Route>
        <Route  path="/services">
                <NavBar hide="home"/>
                <h1>Welcome to Services Page</h1>
        </Route>

        

      </Switch>
   </BrowserRouter>
  )
}

export default App