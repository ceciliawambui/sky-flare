import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Navbar';
import Main from './Pages/Main';

function App() {
  return (
    <div className="vh-100 overflow-hidden">
     <Navbar/>
     <Main/>
    </div>
  );
}

export default App;
