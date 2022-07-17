import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import Scroll from './Components/scroll';



function App() {
  return (
    <Router>
      <Home />
      <Scroll />
    </Router>
  )
}

export default App
