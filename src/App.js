import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import WhoAmI from './pages/WhoAmI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="whoami" element={<WhoAmI />} />
        {/* Redirect */}
        <Route path="/redirect" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
