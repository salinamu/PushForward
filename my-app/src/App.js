import "./App.css";
import "./styles/globals.css";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import GetInvolved from "./pages/getinvolved";

function App() {
  return (
    <div className="App">

      <Router basename="/PushForward">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/getinvolved" element={<GetInvolved />}/>
          <Route path = "*" element={<Navigate replace to="/" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
