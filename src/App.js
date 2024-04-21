import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Experiences } from './pages/experiences/experiences';
import { About } from './pages/about us/about';
import { Pricing } from './pages/pricing/pricing';
import { Header } from './pages/header/header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
