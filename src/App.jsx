import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import firebaseApp from "./firebase";
import Services from './components/Services';
import Nosotros from './components/Nosotros';
import Proyecto from './components/Proyecto';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Proyecto" element={<Proyecto/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;
