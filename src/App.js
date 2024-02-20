import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Navbar';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Services from './Routes/Services';
import Blog from './Routes/Blog';
import { Route, Routes } from 'react-router-dom';
import Footer from './Routes/Footer';



function App() {
  return (
    <div className="vh-100 overflow-hidden">
     <Navbar/>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
