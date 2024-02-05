import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Services from './Routes/Services';
import { Route, Routes } from 'react-router-dom';
import Footer from './Routes/Footer';



function App() {
  return (
    <div className="vh-100 overflow-hidden">
     <Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
