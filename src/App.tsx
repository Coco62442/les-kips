import './App.css';
import Accueil from './Pages/Accueil';  
import Sante from './Pages/Sante';
import BienEtre from './Pages/BienEtre';
import Aide from './Pages/Aide';
import Jeu from './Pages/Jeu';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ResponsiveAppBar from './components/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar/>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/Sante" element={<Sante/>}/>
          <Route path="/BienEtre" element={<BienEtre/>}/>
          <Route path="/Aide" element={<Aide/>}/>
          <Route path="/Jeu" element={<Jeu/>}></Route>
        </Routes>
        <footer>
          <div>
            <p>Laura Benaiton</p>
            <p>Alexis Fondard Martin</p>
            <p>© 2022 Les Kips</p>
            <p>Kylian Thezenas</p>
            <p>Corentin Clément</p>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
