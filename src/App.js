import { Route, Routes, Navigate  } from 'react-router-dom';
import './App.css';
import PortfolioDetail from './Components/Portfolio/PortfolioDetail';
import MainPage from '../src/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<PortfolioDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;