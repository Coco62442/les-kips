import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';  
import Accueil from './Pages/Accueil';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to='./Accueil'>Accueil</Link>
        <Link to='./'>Home</Link>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Accueil" element={<Accueil/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
