import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingpage'
import RegisterInterest from './pages/register'

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register-interest" element={<RegisterInterest />} />
      </Routes>
    </Router>
  )
}

export default App