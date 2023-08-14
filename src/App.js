// import logo from './logo.svg';
import './App.css';
import {

  BrowserRouter as Router,
  Switch,

  Route
} from 'react-router-dom';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from'./components/News';

export default class App extends Component {
  render() {
    return (
      <div>
           
        <Router>
          <Navbar/>
       

          <Switch>


            <Route  exact path="/"   >  
              <News pagesz="5" catogry="general"/>
               </Route>
            <Route  exact path="/science"  >  
              <News pagesz="5"catogry="science"/> 
              </Route>
            <Route  exact path="/sports" >  
              <News pagesz="5"catogry="sports"/>
             </Route>
            <Route  exact path="/technology" > 
               <News pagesz="5"catogry="technology"/>
                </Route>
            <Route  exact path="/culture" > 
               <News pagesz="5"catogry="culture"/> 
               </Route>
            <Route  exact path="/wheather" >   
             <News pagesz="5"catogry="wheather"/>
             </Route>
            <Route exact  path="/politics">  
              <News pagesz="5"catogry="politics"/>
               </Route>
           


          </Switch>


        </Router>
       
       

      </div>
    )
  }
}
