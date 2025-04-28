import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Erorrpage from './pages/Erorrpage'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Erorrpage/>} />
    </Routes>
  </Router>
  )
}

export default App
