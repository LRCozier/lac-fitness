import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import RegisterInterest from './pages/register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/register-interest" element={<RegisterInterest />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;