import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';  
import Sante from './Pages/Sante';
import BienEtre from './Pages/BienEtre';
import Aide from './Pages/Aide'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='./'>Home</Link>
        <Link to='./Sante'>Santé</Link>
        <Link to='./BienEtre'>Bien-être</Link>
        <Link to='./Aide'>Aide</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sante" element={<Sante/>}/>
          <Route path="/BienEtre" element={<BienEtre/>}/>
          <Route path="/Aide" element={<Aide/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
