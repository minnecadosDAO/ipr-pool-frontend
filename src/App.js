import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import IPR from './components/IPR.js'
import Faq from './components/Faq.js'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<IPR />}/>
          <Route path="/faq" element={<Faq />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
