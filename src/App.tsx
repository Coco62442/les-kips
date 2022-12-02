import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';  
import Sante from './Pages/Sante';
import BienEtre from './Pages/BienEtre';
import Aide from './Pages/Aide';
import Jeu from './Pages/Jeu';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import ResponsiveAppBar from './components/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar/>
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
