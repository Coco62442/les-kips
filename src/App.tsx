import React from 'react';
import logo from './logo.svg';
import './App.css';
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
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Accueuil
          </Typography>
        </Toolbar>
      </AppBar>
          <Routes>
            <Route path="/" element={<Accueil/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
