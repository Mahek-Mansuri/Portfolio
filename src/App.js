import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import PortfolioDetail from './Components/Portfolio/PortfolioDetail';


function App() {
  return (
    <div className="App">
      <Home />
      <section id="about"><About /></section>
      <section id="portfoliocard"><Portfolio/></section>
      <section id="contact"><Contact /></section>

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:id" element={<PortfolioDetail />} />
          {/* Add other routes as needed */}
        </Routes>
      

    </div>
  );
}

export default App;
