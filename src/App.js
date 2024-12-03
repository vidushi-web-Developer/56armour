import './App.css';
import "./Personal.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Cctv from './Cctv';
import Security from './Security';
import Personal from './Personal';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cctv" element={<Cctv />} />
      <Route path="/security" element={<Security />} />
      <Route path="/personal" element={<Personal />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
