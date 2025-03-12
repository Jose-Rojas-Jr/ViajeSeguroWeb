import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import firebaseApp from "./firebase";
import Conductor from './components/Conductor';
import Membership from './components/Membership';
import Services from './components/Services';
import Viajero from './components/Viajero';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/membership" element={<Membership/>} />
      

        <Route path="/Conductor" element={<Conductor/>} />
        <Route path="/Viajero" element={<Viajero/>} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;
