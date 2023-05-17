import "./App.css";
import "./styles/globals.css";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import LearnMore from "./pages/learnmore";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/learnmore" element={<LearnMore />}/>
          <Route path = "*" element={<Navigate replace to="/" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
