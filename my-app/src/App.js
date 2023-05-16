import "./App.css";
import "./styles/globals.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import LearnMore from "./pages/learnmore";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/learnmore" element={<LearnMore />}>
            About
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
