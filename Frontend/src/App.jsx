import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/publicas/Home';
import Productos from './pages/publicas/Productos';
import Nosotros from './pages/publicas/Nosotros';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
