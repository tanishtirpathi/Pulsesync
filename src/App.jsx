import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Erorrpage from './pages/Erorrpage'
import Wrapper from './pages/wrapper'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Wrapper/>} />
      <Route path="/error" element={<Erorrpage/>} />
    </Routes>
  </Router>
  )
}

export default App
