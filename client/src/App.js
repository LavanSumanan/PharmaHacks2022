import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Button from "./components/Button";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/dev" element={<Button colour="green">Test</Button>} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
