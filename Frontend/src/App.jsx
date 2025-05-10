import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/publicas/Home';
import Productos from './pages/publicas/Productos';
import Nosotros from './pages/publicas/Nosotros';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  )
}

export default App
