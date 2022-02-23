import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home.js'
//import Bootstrap from './components/Bootstrap.js'
//import Stake from './components/Stake.js'
//import Perpetual from './components/Perpetual.js'
//import Faq from './components/Faq.js'
//import Dapp from './components/App.js'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
