import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';  
import Sante from './Pages/Sante';
import BienEtre from './Pages/BienEtre';
import Aide from './Pages/Aide';
import Jeu from './Pages/Jeu';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <p>Logo</p>
        <h2>NomSite</h2>
        <Link to='./'>Home</Link>
        <Link to='./Sante'>Santé</Link>
        <Link to='./BienEtre'>Bien-être</Link>
        <Link to='./Aide'>Aide</Link>
        <Link to='./Jeu'>Le Jeu !</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Sante" element={<Sante/>}/>
          <Route path="/BienEtre" element={<BienEtre/>}/>
          <Route path="/Aide" element={<Aide/>}/>
          <Route path="/Jeu" element={<Jeu/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
