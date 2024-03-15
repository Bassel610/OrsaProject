// import logo from './logo.svg';
import './App.css';
import "./Resbosive.css"
import Home from './Pages/Home/Home';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Shope from './Pages/Shope/Shope';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shope" element={<Shope />} />
        </Routes>
    </div>
  );
}

export default App;
