import React,{useState} from 'react';
import routers from './Components/Routers/Router'
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Home from './Components/Home';
import EditForm from './Components/EditForm';
let counter =0;
function App() {
 
  return (
      <Router>
    <div className = "container-fluid">
     
      <Header/>
        <Switch>
          {routers.map(rout => < Route {...rout} /> )}
        </Switch>
     
    </div>
     </Router>
  );
}

export default App;
