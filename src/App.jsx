import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Documents from './Documents'
import Presentations from './Presentations'
import Forms from './Forms'
import Wireframing from './Wireframing'
import ColorScheme from './ColorScheme'
import Creativity from './Creativity'
import Airplane from './Airplane'
import Home from './Home'
import Sidebar from './Sidebar'
import Students from "./Students"
function App() {
  return (
    <Router>
    <Sidebar/>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Documents" element={<Documents />} />
        <Route path="/presentations" element={<Presentations />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/wireframing" element={<Wireframing />} />
        <Route path="/colorScheme" element={<ColorScheme />} />
        <Route path="/creativity" element={<Creativity />} />
        <Route path="/airplane" element={<Airplane />} />
        <Route path="/students" element={<Students />} />
      </Routes>
      </Router>
  );
}

export default App;
